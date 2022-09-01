const { redisGet, redisSet } = require('../libs/redisClient')

class Index {
  async index(ctx, next) {
    const sess = ctx.session;
    if (!sess.uid) {
      sess.uid = 1;
      sess.username = 'icourse';
      sess.nickname = 'myicourse';
      sess.gender = 'male';
    }

    redisSet('a', 1);
    redisGet('icourse.sessHiSwPbkCSssom55vLXpsRNa1W8Y7QssA').then((res) => {
      console.log(res);
    });
    redisGet('a').then((res) => {
      console.log(res);
    })

    ctx.body = {
      session: sess
    }

    // await ctx.render( 'index');
  }
}

module.exports = new Index();