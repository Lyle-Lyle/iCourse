const router = require('koa-router')(),
  crawlerController = require('../Controllers/Crawler');

//配置爬虫的路由 

// 配置个前缀
router.prefix('/crawler');

// 路由匹配到，执行这个控制器的方法
router.get('/crawl_slider_data', crawlerController.crawlSliderData);

module.exports = router
