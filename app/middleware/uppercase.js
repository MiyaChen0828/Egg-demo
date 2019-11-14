module.exports = (option, app) => {
  return async function uppercase(ctx, next) {
    console.log("======我是中间件大小写========");
    if (ctx.query.name) {
      ctx.query.name = ctx.query.name && ctx.query.name.toUpperCase();
    }
    await next();
  };
};