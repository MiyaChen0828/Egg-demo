module.exports = app => {
  const { router, controller } = app;
  router.get('/getStudent', controller.student.list);
  router.get("/create", controller.student.create);
  router.get("/add", controller.student.add);
  // router.redirect('/', '/getStudent', 302);
  // app.router.get('s', '/getStudent', app.middlewares.uppercase(), controller.student.list)
};
