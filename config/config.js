
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
        domain: 'icourseimg.lyle-lyle.click/',
      }
    },
    crawler: {
      // 配置爬虫爬取的url
      url: {
        main: 'https://msiwei.ke.qq.com/#category=-1&tab=0',
        course: 'https://msiwei.ke.qq.com/#tab=1&category=-1',
        teacher: 'https://msiwei.ke.qq.com/#tab=2&category=-1'
      }
    }
  }
}