require('dotenv').config();
const axios = require('axios');
const {API_KEY} = process.env;
const {Videogame, Genre, Platform} = require ('../db.js');

const all_Games = async () => {
    let page1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    .then(response => response.data.results)
    .catch(error => error);
    let page2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`)
    .then(response => response.data.results)
    .catch(error => error);
    let page3 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`)
    .then(response => response.data.results)
    .catch(error => error);
    let page4 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`)
    .then(response => response.data.results)
    .catch(error => error);
    let page5 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`)
    .then(response => response.data.results)
    .catch(error => error);
    let total = page1.concat(page2, page3, page4, page5);
    let All_Api_Games = total?.map((g) => {
        return {
            id: g.id,
            name: g.name,
            background_image: g.background_image,
            rating: g.rating,
            released: g.released,
            Platforms: g.platforms?.map((p) => p.platform.name),
            Genres: g.genres?.map((gen) => gen.name) 
        }
    });
    const DB_Videogames = (await Videogame.findAll({include: [
        {model: Platform},
        {model: Genre}
    ]})).map(record => record.toJSON());
    let All_DB_Videogames = await DB_Videogames.map((e) => {
        return{
            id: e.id,
            name: e.name,
            background_image: e.background_image,
            rating: e.rating,
            released: e.released,
            Platforms: e.Platforms?.map((p) => p.name),
            Genres: e.Genres?.map((g) => g.name)
        }
    });
    console.log('all_DB_Videogames -->', All_DB_Videogames);
    let All_Data_Games= All_Api_Games.concat(All_DB_Videogames)
    return All_Data_Games;
};

module.exports = all_Games;