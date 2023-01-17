const all_Games = require('./All_Games.js');
const {Platform} = require ('../db.js');

const platforms = async () => {
let games = await all_Games();
games?.map((g) => g.Platforms.map((plat) => {
    Platform.findOrCreate({
        where: {
            name: plat
        }
    })
    }
 ));
return await Platform.findAll();
};


module.exports = platforms;