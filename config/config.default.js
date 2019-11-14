/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1570795250467_4190';

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/egg',
    // 链接到本地的MongoDB，mongoTest是我本地数据库的名字，根据自己数据库名字进行填写即可
    options: {},
  };
  // add your middleware config here
  config.middleware = ['uppercase', 'forbidIp', 'auth'];

  //如果你的中间件需要传递参数，可以通过config.uppercase来进行参数的传递，在中间件件可以通过options接收传递过来的参数
  config.uppercase = {
    data: 'cdfg',
  }
  config.forbidIp = {
    forbidips: ['127.0.0.1:7001', '172.25.2.79']
  };
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.logger = {
    level: 'INFO',
    dir: path.join(__dirname, '../logs/dev/app') // 保存路径为工程路径下`logs/prod/app`
  };

  // 配置 Session
  config.session = {
    key: 'SESSION_ID', // 设置 Session cookies 里面的 key
    maxAge: 5000, // 5秒
    httpOnly: true,
    encrypt: true,
    renew: true, // 每次刷新页面，Session 都会被延期。
  };


  return {
    ...config,
    ...userConfig,
  };
};
