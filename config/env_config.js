// 配置环境

const ENV = process.env.NODE_ENV;

module.exports = {
  isDev: ENV === 'dev',
  isPrd: ENV === 'production',

}

