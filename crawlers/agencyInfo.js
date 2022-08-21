const crawler = require('../libs/crawler'),
  { crawler } = require('../config/config')



crawler({
  url: crawler.url.main,
  callback() {
    const $ = window.$,
      $item = $('.agency-big-banner-ul .agency-big-banner-li');

    const data = [];

    $item.each((index, item) => {
      const $el = $(item),
        // 根据类名拿到a标签
        $elLink = $el.find('.js-banner-btnqq');

      // 根据拿到的数据创建对象
      const dataItem = {
        cid: $elLink.attr('data-id'),
        href: $elLink.prop('href'),
        imgUrl: $elLink.find('img').prop('src'),
        title: $elLink.prop('title'),
        imgKey: ''
      }
      data.push(dataItem);
    });
    return data;
  }
})  