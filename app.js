module.exports = app => {
    console.log("=====app=========");
    console.log(app);
    app.logger.debug('debug info');
    app.logger.info('启动耗时 %d ms');
    app.logger.warn('warning!');
    // app.logger.error(someErrorObj);

    //server: 一个worker进程只会触发一次，在http服务完成启动后，会将http server通过此事件暴露给开发者
    app.once('server', server => {
        console.log("==========server============");
    });
    //error: 运行时任何异常被onerror插件捕获后，都会触发error事件，
    //将错误对象和关联到上下文(如果有)暴露给开发者，可以进行自定义的日志上报等处理
    app.on('error', (err, ctx) => {
        console.log("==========error============");
    })

    //应用收到请求和响应请求时，分别触发request和response事件，并将当前请求上下文暴露出来，可记录日志
    app.on('request', ctx => {
        console.log("==========request============");
    })
    app.on('response', ctx => {
        console.log("==========response============");
    });
}