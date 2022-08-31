const Sequelize = require('sequelize');

// 配置表中字段的类型
module.exports = {
  STRING: Sequelize.STRING,
  INT: Sequelize.INTEGER,
  BIGINT: Sequelize.BIGINT,
  DECIMAL: Sequelize.DECIMAL,
  TEXT: Sequelize.TEXT
}