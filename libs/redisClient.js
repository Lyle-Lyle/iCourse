const redisCLi = require('../db/connections/redis_connect');


// 定义Redis的操作

function redisSet(key, value, timeout = 60 * 60) {
  if (typeof (value) === 'object') {
    value = JSON.stringify(value);
  }
  redisCLi.set(key, value);
  redisCLi.expire(key, timeout);
}

function redisGet(key) {
  return new Promise((resolve, reject) => {
    redisCLi.get(key, (error, value) => {
      if (error) {
        reject(error);
        return;
      }

      if (value == null) {
        resolve(null);
        return;
      }

      try {
        resolve(JSON.parse(value));
      } catch (error) {
        resolve(value);
      }
    });
  });
}

module.exports = {
  redisSet,
  redisGet,
}