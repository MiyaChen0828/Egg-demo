module.exports = app => {
    const { router, controller } = app;
    router.get('/getTeacher', controller.teacher.list);
    // router.redirect('/', '/getStudent', 302);
    // app.router.get('s', '/getStudent', app.middlewares.uppercase(), controller.student.list)
  };
  