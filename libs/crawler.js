const pt = require('puppeteer');


// options是调用的时候用传入一个对象，这个对象有url和callback两个属性
module.exports = async function (options) {
  const bs = await pt.launch(),
    pg = await bs.newPage(),
    url = options.url

  await pg.goto(url, {
    waitUntil: 'networkidle2'
  });

  const result = await pg.evaluate(options.callback);
  await bs.close()
  process.send(result);
  // 关闭进程
  setTimeout(() => {
    process.exit(0);
  }, 1000)
}

