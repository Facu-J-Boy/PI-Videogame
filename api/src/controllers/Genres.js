const all_Games = require('./All_Games.js');
const {Genre} = require ('../db.js');

const genres = async () => {
    try {
      let games = await all_Games();
      for (const game of games) {
        for (const gen of game.Genres) {
          await Genre.findOrCreate({
            where: {
              name: gen
            }
          });
        }
      }
      return await Genre.findAll();
    } catch (error) {
      console.error("Error creating genres:", error);
      return [];
    }
  };


module.exports = genres;