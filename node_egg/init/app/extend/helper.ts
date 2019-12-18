/*
 * @Description: Helper 函数
 * @Author: 鲁大师
 * @Date: 2019-12-12 10:01:35
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-18 10:50:36
 */

// Helper 函数用来提供一些实用的 utility 函数。

// 获取 Token
const getAccessToken = ctx => {
  const bearerToken = ctx.request.header.authorization;
  return bearerToken && bearerToken.replace('Bearer', '');
};

// 校验 Token
exports.verifyToken = async (ctx, userId) => {
  const token = getAccessToken(ctx);
  const verifyResult = await ctx.service.user.verifyToken(token);
  if (!verifyResult.verify) {
    ctx.helper.error(ctx, 401, verifyResult.message);
    return false;
  }
  if (userId !== verifyResult.message.id) {
    ctx.helper.error(ctx, 401, '用户 ID 与 Token 不一致');
    return false;
  }
  return true;
};

// 处理成功响应
exports.success = (ctx, result = null, message = '请求成功', status = 200) => {
  ctx.body = {
    code: 1,
    message,
    data: result,
  };
  ctx.status = status;
};
// 处理失败响应
exports.error = (ctx, code, message) => {
  ctx.body = {
    code,
    message,
  };
  ctx.status = code;
};
