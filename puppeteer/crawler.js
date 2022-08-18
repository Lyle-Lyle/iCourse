// const pt = require('puppeteer');

// ;( async () => {
//   // 打开浏览器 bs = browser
//   const bs = await pt.launch(), 
//   url = 'https://msiwei.ke.qq.com/#category=-1&tab=0',
//   pg = await bs.newPage();
  
//   await pg.goto(url,{
//     timeout: 30 * 1000,
//     waitUtil: 'networkidle2'
//   });

//   // 分析页面
//   const result = await pg.evaluate(() => {
//     // 这个函数内部代表了打开的这个页面环境
//     // 比如这个页面中如果有 JQuery 可以直接拿来用
    
//     const $ = window.$,
//           $item = $('.agency-big-banner-ul .agency-big-banner-li');

//     let data = [];

//     $item.each((index, item) => {
//       const $el = $(item),
//       // 根据类名拿到a标签
//             $elLink = $el.find('.js-banner-btnqq');

//       // 根据拿到的数据创建对象
//       const dataItem = {
//         cid: $elLink.attr('data-id'),
//         href: $elLink.prop('href'),
//         imgUrl: $elLink.find('img').prop('src'),
//         title: $elLink.prop('title')
//       }

//       data.push(dataItem);
//     });
//     return data;
//   });
//   console.log(result);
//   await bs.close();

//   // 子进程发送数据给父进程，不能直接以return返回数据的形式,而是应该用子进程发送消息的形式
//   process.send(result);

//   setTimeout(() => {
//     // 进程关闭并发送信号0
//     process.exit(0);
//   })
// })()