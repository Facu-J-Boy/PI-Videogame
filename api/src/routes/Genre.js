const { Router } = require('express');
const genres = require('../controllers/Genres.js');

const router = Router();

router.get('/', async(req, res) => {
    try {
        const genresDB = await genres();
        let allGenres = [...new Set(genresDB)].sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
        res.status(200).send(allGenres);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports = router;