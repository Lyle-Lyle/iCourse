const { startProcess, qiniuUpload } = require('../libs/utils'),
  config = require('../config/config');

class Crawler {
  crawlSliderData() {
    startProcess({
      path: '../crawlers/slider',
      async message(data) {
        // console.log(data);
        data.map(async item => {
          if (item.imgUrl && !item.img_key) {
            const qiniu = config.qiniu;

            try {
              // 从
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