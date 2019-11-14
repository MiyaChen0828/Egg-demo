var sd = require('silly-datetime');
module.exports = {
  formatTime(param) {
    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象
    //格式化日期  param（时间戳）
    console.log("helper=============");
    console.log(this);
    return "我是Helper: " + sd.format(new Date(), 'YYYY-MM-DD');
  }
};