/*
外部可以通过 this.app.foo()
*/

module.exports = {
  foo(param) {
    console.log("=============this==========");
    console.log(this);
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    return "我是app";
  },
};