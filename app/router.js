'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/home')(app);
  require('./router/student')(app);
  require('./router/teacher')(app);
};
