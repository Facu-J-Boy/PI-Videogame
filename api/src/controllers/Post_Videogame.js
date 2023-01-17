const {Videogame, Genre, Platform} = require ('../db.js');


const postGame = async (name, background_image, description, released, rating, platforms, genres) => {
    const platform = await Platform.findAll({where: {name: platforms}});
    console.log(await platform);
    const genre = await Genre.findAll({where: {name: genres}});
    console.log(await genre);
    const game = await Videogame.create({
        name: name,
        background_image: background_image,
        description: description, 
        released: released, 
        rating: rating
    });
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