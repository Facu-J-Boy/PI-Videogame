const { Router } = require('express');
const platforms = require('../controllers/Platforms.js');
const router = Router();
router.get('/', async(req, res) => {
try {
    const platformsDB = await platforms();
    let allPlatforms = [...new Set(platformsDB)].sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
        res.status(200).send(allPlatforms);
 } catch (error) {
    res.status(404).send(error.message);
   }
})

module.exports = router;