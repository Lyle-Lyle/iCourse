const Crawler = require('../libs/crawler'),
  { crawler } = require('../config/config');


// 爬取机构信息的爬虫

Crawler({
  url: crawler.url.main,
  callback() {
    const $ = window.$,
      $section = $('.agency-head');

    return {
      logoUrl: $section.find('.agency-head-logo').prop('src'),
      name: $section.find('.ag-title-main').text(),
      // 获得好评度，以0-9开头忽略大小写
      feedbackRate: $section.find('.ag-info span').eq(0).text().replace(/[^0-9]/ig, ''),
      studentCount: $section.find('.js-item-num').attr('data-num'),
      description: $section.find('.ag-info-des').text(),
      // 一个跳转的链接
      qqLink: $section.find('.ag-info-btn').prop('href'),
      logoKey: ''
    };
  }
});