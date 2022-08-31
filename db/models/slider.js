const seq = require('../connections/mysql_connect'),
  { STRING, INT, BIGINT } = require('../../config/db_type_config');

// 建表
const Slider = seq.define('slider', {
  // 实际上还会自动生成一个表 id 字段

  cid: {
    comment: 'course ID',
    type: BIGINT,
    allowNull: false,
    unique: true,

  },
  href: {
    comment: 'course detail page link',
    type: STRING,
    allowNull: false,

  },
  imgUrl: {
    comment: 'course image url',
    type: STRING,
    allowNull: false,

  },
  title: {
    comment: 'course name',
    type: STRING,
    allowNull: false,

  },
  imgKey: {
    comment: 'qiniu image name',
    type: STRING,
    allowNull: false,

  },
  status: {
    comment: 'course status',
    type: INT,
    defaultValue: 1,
    allowNull: false,
  }
});

module.exports = Slider;