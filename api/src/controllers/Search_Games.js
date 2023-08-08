const all_Games = require('./All_Games.js');

const search_Games = async (name) => {
    let games = await all_Games();
    return games.filter((g) => g.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
}

module.exports = search_Games;