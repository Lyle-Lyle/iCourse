const seq = require('./connections/mysql_connect');

// node sync.js 来建表


// 可以只写models，因为会自动找index
require('./models/index');

seq.authenticate().then(() => {
  console.log('ok');
}).catch((error) => {
  console.log('error' + error);
});


seq.sync({
  force: true
}).then(() => {
  console.log('The table has been synchronised into database successfully');
  // 关掉同步进程 
  process.exit();
}) 