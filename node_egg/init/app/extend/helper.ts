/*
 * @Description: Helper 函数
 * @Author: 鲁大师
 * @Date: 2019-12-12 10:01:35
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-11 14:22:42
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
exports.success = (ctx, data = null, message = '请求成功', status = 200) => {
  ctx.status = status;
  return {
    code: 1,
    message,
    data,
  };
};

// code码定义
const errorCode = {
  10001: '暂无用户数据，请先注册账号',
  10002: '用户名和密码错误',
};

// 处理失败响应
exports.error = (ctx, data = null, message = '请求失败', code = 0, status = 200) => {
  ctx.status = status;
  return {
    code,
    message,
    data,
  };
};
