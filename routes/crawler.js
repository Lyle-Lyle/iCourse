const router = require('koa-router')(),
  crawlerController = require('../Controllers/Crawler');

router.prefix('/crawler');

router.get('/crawl_slider_data', crawlerController.crawlSliderData);

module.exports = router
