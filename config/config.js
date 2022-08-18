
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
        domain: 'http://rgs3zby84.bkt.gdipper.com/',
      }
    }
  }
}