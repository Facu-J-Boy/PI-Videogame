const { Router } = require('express');
const router = Router();
const search_Games = require('../controllers/Search_Games.js');
const all_Games = require('../controllers/All_Games.js');

router.get('/', async (req, res) => {
    const {name} = req.query;
    try {
        if(!name) {
            const Games = await all_Games();
            res.status(200).send(Games);
        } else {
            const Search = await search_Games(name);
            res.status(201).json(Search);
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;