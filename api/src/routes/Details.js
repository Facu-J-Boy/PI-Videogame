const { Router } = require('express');
const router = Router();
const details = require('../controllers/Details.js');

router.get ('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const det = await details(id);
        res.status(200).send(det);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;