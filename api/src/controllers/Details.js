require('dotenv').config();
const axios = require('axios');
const {API_KEY} = process.env;
const {Videogame, Genre, Platform} = require('../db.js');

const details = async (id) => {
    try {
        const result = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    .then(res => res.data)
    .catch(err => err);
    const {name, description, background_image, released, rating, platforms, genres} = result;
    const detail = {
        name,
        description: description.replace(/<[^>]*>/g, ''), 
        background_image,
        released, 
        rating, 
        Platforms: platforms?.map((plat) => {
            return {
                id: plat.platform.id,
                name: plat.platform.name
            }
        }), 
        Genres: genres?.map((gen) => {
            return {
                id: gen.id,
                name:gen.name
            }
        })
    }
    return detail;
    } catch (error) {
        let db = await Videogame.findOne({
            where: {
                id: id
            }, 
            include: [
                {model: Platform},
                {model: Genre}
            ],
    });
    return db;
    }
        
};


module.exports = details;