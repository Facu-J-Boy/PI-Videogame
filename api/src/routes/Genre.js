const { Router } = require('express');
const genres = require('../controllers/Genres.js');

const router = Router();

router.get('/', async(req, res) => {
    try {
        const genresDB = await genres();
        res.status(200).send(genresDB);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports = router;