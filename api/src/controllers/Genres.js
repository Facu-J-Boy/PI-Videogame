const all_Games = require('./All_Games.js');
const {Genre} = require ('../db.js');

const genres = async () => {
let games = await all_Games();
games?.map((g) => g.Genres.map((gen) => {
    Genre.findOrCreate({
        where: {
            name: gen
        }
    })
    }
 ));
return await Genre.findAll();
};


module.exports = genres;