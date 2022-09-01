const ENV = require('./env_config');

// const Sequelize = require('sequelize');
// const seq = new Sequelize('icourse', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// })


module.exports = {
  MYSQL_CONF: {
    base: {
      host: 'localhost',
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    },
    // 为生产环境和开发环境配置不同的密码
    conf: ['icourse', 'root', ENV.isPrd ? 'xxx' : '12345678']
  },
  REDIS_CONF: ['6379', '127.0.0.1']
};