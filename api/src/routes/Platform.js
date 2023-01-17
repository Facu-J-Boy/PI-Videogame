const { Router } = require('express');
const platforms = require('../controllers/Platforms.js');
const router = Router();
router.get('/', async(req, res) => {
try {
    const platformsDB = await platforms();
        res.status(200).send(platformsDB);
 } catch (error) {
    res.status(404).send(error.message);
   }
})

module.exports = router;