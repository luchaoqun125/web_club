/*
 * @Description: page的中间件
 * @Author: 鲁大师
 * @Date: 2020-01-11 13:27:11
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-11 14:19:07
 */
module.exports = () => {
  return async (ctx, next) => {

    let { current = 1, pageSize = 20, ...query } = ctx.request.query;
    current = parseInt(current < 1 ? 1 : current);
    const limit = parseInt(pageSize > 20 ? 20 : pageSize);
    const offset = (current - 1) * pageSize;

    ctx.state.pagination = {
      offset,
      limit,
      current,
      pageSize,
      query,
    };

    await next();
  };
};
