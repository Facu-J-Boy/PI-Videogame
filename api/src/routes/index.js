const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const GenreRouter = require ('./Genre.js');
const DetailRouter = require('./Details.js');
const PlatformRouter = require('./Platform.js');
const VideogameRouter = require('./Videogame.js');
const PostVideogameRouter = require('./PostVideogame.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/genres', GenreRouter);
router.use('/videogame', DetailRouter);
router.use('/platforms', PlatformRouter);
router.use('/videogames', VideogameRouter);
router.use('/videogames', PostVideogameRouter);



module.exports = router;
