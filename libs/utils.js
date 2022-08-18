const cp = require('child_process'),
  { resolve } = require('path'),
  nanoId = require('nanoid'),
  Qiniu = require('qiniu'),
  { qiniu } = require('../config/config');

module.exports = {

  // 开启子进程
  startProcess(options) {
    const script = resolve(__dirname, options.path),
      child = cp.fork(script, []);

    let invoked = false;
    child.on('message', (data) => {
      options.message(data);
    });

    child.on('exit', (code) => {
      if (invoked) {
        return;
      }
      invoked = true;
      options.exit(code);
    });

    child.on('error', (err) => {
      if (invoked) {
        return;
      }
      invoked = true;
      options.error
    })
  },

  qiniuUpload(options) {
    const mac = new Qiniu.auth.digest.Mac(options.ak, options.sk),
      conf = new Qiniu.conf.Config(),
      client = new Qiniu.rs.BucketManager(mac, conf),
      key = nanoId() + options.ext;

    return new Promise((resolve, reject) => {
      // 把什么URL 传到哪个存储空间 使用什么名字
      client.fetch(options.url, options.bucket, key, (error, ret, info) => {
        if (error) {
          reject(error);
        } else {
          if (info.statusCode == 200) {
            resolve({ key });
          } else {
            reject(info);
          }
        }
      })
    })
  }

}