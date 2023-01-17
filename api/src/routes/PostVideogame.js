const { Router } = require('express');
const router = Router();
const postGame = require('../controllers/Post_Videogame.js');


router.post('/', async (req, res) => {
    const {name, background_image, description, released, rating, platforms, genres} = req.body;
    if(!name || !description || !platforms) {
        return res.status(404).send('Faltan datos obligatorios');
    }
    try {
        const newVideogame = await postGame(name, background_image, description, released, rating, platforms, genres)
        res.status(201).send(newVideogame);        
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;