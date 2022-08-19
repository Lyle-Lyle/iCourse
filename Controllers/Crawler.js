const { startProcess, qiniuUpload } = require('../libs/utils'),
  config = require('../config/config');


// 创建一个爬虫的controller是一个类并导出这个类的实例,当路由匹配到这个controller，就会执行
class Crawler {
  // 定义一个爬取slider的函数，在这个函数中调用startProcess和qiniuUpload方法
  crawlSliderData() {
    startProcess({
      path: '../crawlers/slider',
      // 监听子进程的数据
      async message(data) {
        // console.log(data);
        data.map(async item => {
          if (item.imgUrl && !item.img_key) {
            const qiniu = config.qiniu;

            try {
              // 把图片通过qiniuUpload上传到七牛之后得到一个新的名称即key(由nanoid + 后缀名组成)
              const imgData = await qiniuUpload({
                url: item.imgUrl,
                bucket: qiniu.bucket.tximg.bucket_name,
                ak: qiniu.keys.ak,
                sk: qiniu.keys.sk,
                ext: '.jpg',
              });
              // 为数据的imgKey赋值
              if (imgData.key) {
                item.imgKey = imgData.key;
              }

              console.log(imgData);
            } catch (error) {
              console.log(error);
            }
          }
        });
      },
      async exit(code) {
        console.log(code);
      },
      async error(error) {
        console.log(error);
      }
    });
  }
}

module.exports = new Crawler();