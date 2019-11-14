/*
外部可以通过 this.ctx.request.foo()
*/
module.exports = {
    foo(param) {
        // console.log(this);
        return "我是request";
    },
};