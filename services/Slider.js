// 导入表模型
const SliderModel = require('../db/models/slider');

class SliderService {
  // 往数据库中增加轮播图数据
  async addSliderData(data) {
    const cid = data.cid;
    // 先找数据是否存在
    const result = await SliderModel.findOne({
      where: { cid }
    });
    // 如果 id 存在就更新数据
    if (result) {
      // 更新数据
      return await SliderModel.update(data, {
        where: { cid }
      });
    } else {
      // 如果 id 不存在则创建数据
      return await SliderModel.create(data);
    }
  }

  async getSliderData() {
    return await SliderModel.findAll({
      attributes: {
        exclude: ['imgUrl']
      }
    });
  }

  async changeSliderStatus(id, status) {
    const ret = await SliderModel.update({ status }, {
      where: { id }
    });

    return ret[0];
  }
}

module.exports = new SliderService();