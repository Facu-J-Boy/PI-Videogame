const {Videogame, Genre, Platform} = require ('../db.js');
const cloudinary  = require("../Utils/cloudinary");

const postGame = async (name, background_image, description, released, rating, platforms, genres) => {
    const platform = await Platform.findAll({where: {name: platforms}});
    console.log(await platform);
    const genre = await Genre.findAll({where: {name: genres}});
    console.log(await genre);
    const image = await cloudinary.uploader.upload(background_image, {
        folder: "videogame"
    })
    const game = await Videogame.create({
        name: name,
        background_image: image?.url,
        description: description, 
        released: released, 
        rating: rating
    });
    console.log(game.background_image)
    await game.addGenre(genre);
    await game.addPlatform(platform);
    return await Videogame.findOne({
        where: {
            name: name
        }, 
        include: [
            {model: Platform},
            {model: Genre}
        ],
});
};

module.exports = postGame;