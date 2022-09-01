const redis = require('redis'),
  { REDIS_CONF } = require('../../config/db_config');


const redisCLi = redis.createClient(REDIS_CONF);

// redisCLi.connect().then(
//   console.log('Ok')
// );

redisCLi.on('error', (error) => {
  console.log('Redis error: ' + error);
});

module.exports = redisCLi;

