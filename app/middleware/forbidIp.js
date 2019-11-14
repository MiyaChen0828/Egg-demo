module.exports = (options, app) => {
    return async function forbidIp(ctx, next) {
        const ids = options.forbidips;
        // 获取客户端的ip
        const clientIp = ctx.request.ip;
        const isHasIp = ids.some(val => {
            if (val === clientIp) {
                return true;
            }
            return false;
        });
        if (isHasIp) {
            ctx.status = 403;
            ctx.body = '您的IP已经被屏蔽掉了';
        } else {
            await next();
        }
    }
};