'use strict';
const mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
const validate = {
  enable: true,
  package: 'egg-validate',
};
//ejs
const ejs = {
  enable: true,
  package: 'egg-view-ejs',
};

module.exports = {
  mongoose,
  validate,
  ejs
}
