module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/getCookie', controller.home.getCookie);
    router.get('/clearCookie', controller.home.clearCookie);
};

