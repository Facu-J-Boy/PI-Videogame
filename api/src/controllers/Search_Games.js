const all_Games = require('./All_Games.js');

const search_Games = async (name) => {
    let games = await all_Games();
    let search = games.filter((g) => g.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    const find = search.slice(0, 15);
    if(!find.length) throw new Error ('videogame not found');
    return find;
}

module.exports = search_Games;