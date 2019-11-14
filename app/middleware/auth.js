module.exports = (options, app) => {
    return async function setCrtf(ctx, next) {
        ctx.state.csrf = ctx.csrf;   //设置全局变量 
        await next();
    }
};