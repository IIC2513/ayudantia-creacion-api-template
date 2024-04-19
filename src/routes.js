const Router = require('koa-router');
const movies = require('./routes/movies');
const directors = require('./routes/directors');
const actors = require('./routes/actors');
const {ActIn} = require('./models');

const router = new Router();

router.use('/movies', movies.routes());
router.use('/directors', directors.routes());
router.use('/actors', actors.routes());

router.get('/', async (ctx) => {
    ctx.body = 'Hello, world!';
  });
  
module.exports = router;
