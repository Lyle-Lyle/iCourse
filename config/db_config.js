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
  mysql: {
    base: {
      host: 'localhost',
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    },
    conf: ['icourse', 'root', '12345678']
  }
};