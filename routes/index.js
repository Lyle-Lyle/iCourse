const router = require('koa-router')(),
  indexController = require('../controllers/Index');


router.get('/', indexController.index);

module.exports = router; 