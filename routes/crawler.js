const router = require('koa-router')(),
  crawlerController = require('../controllers/Crawler');

//配置爬虫的路由 

// 配置个前缀
router.prefix('/crawler');

// 路由匹配到，执行这个控制器的方法
router.get('/crawl_slider_data', crawlerController.crawlSliderData);
router.get('/crawl_agency_info', crawlerController.crawlAgencyInfo);
router.get('/crawl_recom_course', crawlerController.crawlRecomCourse);
router.get('/crawl_collection', crawlerController.crawlCollection);
router.get('/crawl_teacher', crawlerController.crawlTeacher);
router.get('/crawl_student', crawlerController.crawlStudent);
router.get('/crawl_course_tab', crawlerController.crawlCourseTab);
router.get('/crawl_course_data', crawlerController.crawlCourseData);
router.get('/crawl_aboutus', crawlerController.crawlAboutus);


module.exports = router
