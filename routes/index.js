const router = require('koa-router')(),
      cp = require('child_process'),
      { resolve } = require('path');

router.get('/', async (ctx, next) => {


  const script = resolve(__dirname, '../puppeteer/crawler.js'),
       // 开启子进程
        child = cp.fork(script, []);
  
  let invoked = false;

  // 能监听到子进程发送的消息 
  child.on('message', (data) => {
    console.log(data);
  });

  child.on('exit', (code) => {
    if (invoked) {
      return;
    }
    invoked = true;
    console.log(code);
  });

  child.on('error', (data) => {
    if (invoked) {
      return;
    }
    invoked = true;
    console.log(err);
  });

  
});

module.exports = router
