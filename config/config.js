const { REDIS_CONF } = require('./db_config');
// 七牛云的存储空间相关配置
module.exports = {
  qiniu: {
    keys: {
      ak: '5XnQZCiMtDBrBuwIurOI9yHy-ySKBPBWpoPlnkkl',
      sk: 'ENgPDms_1R_4ls34AsPYQ1n05MAMXX8KxbsKpxjX',
    },

    bucket: {
      tximg: {
        // bucket就是对象存储的存储空间
        bucket_name: 'icourse-img',
        // 需要拼接图片，以/结尾
        domain: 'http://icourseimg.lyle-lyle.click/',
      }
    }
  },
  crawler: {
    // 配置爬虫爬取的url
    url: {
      main: 'https://msiwei.ke.qq.com/#category=-1&tab=0',
      course: 'https://msiwei.ke.qq.com/#tab=1&category=-1',
      teacher: 'https://msiwei.ke.qq.com/#tab=2&category=-1',
      aboutus: 'https://msiwei.ke.qq.com/?tuin=304a784b#category=-1&tab=3',
    }
  },
  sessionInfo: {
    // 搞个随机字符串
    keys: ['a1!s2@d3#f4$_+g5%h6^'],
    name: 'icourse.sid',
    prefix: 'icourse.sess',
  },
  cookieInfo: {
    path: '/', // 作用在根路径下，如果作用在某个子路径，那么根路径是不会起作用的
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  redisInfo: {
    all: `${REDIS_CONF[1]}:${REDIS_CONF[0]}`
  }
}