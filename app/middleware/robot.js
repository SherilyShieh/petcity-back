// options === app.config.robot
module.exports = (options, app) => {
    return async function robotMiddleware(ctx, next) {
        ctx.response.type = 'application/json';
        ctx.set("Transfer-Encoding", "chunked");
        const source = ctx.get('user-agent') || '';
        const match = options.ua.some(ua => ua.test(source));
        if (match) {
            ctx.status = 403;
            ctx.message = 'Go away, robot.';
        } else {
            await next();
        }
    }
};