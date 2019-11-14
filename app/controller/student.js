const Controller = require('egg').Controller;

class UserController extends Controller {
  // 这里的 list 就是上面 controller.student.list 里面的 list
  async list() {
    const ctx = this.ctx;
    console.log("===============query=============");
    console.log(this.ctx.query);
    const createRule = {
      name: { type: 'string' }
    };
    // console.log(this.ctx.app);
    // console.log(this.ctx.helper.formatTime());
    try {
      ctx.validate(createRule, ctx.query);
      var lists = await ctx.service.student.list();
      // 为了方便文件的管理，当后续controller的方法变多的时候，操作数据库的语言就不适合都挤在一个文件里面，
      //所以egg框架的service文件夹就起到了分配压力的作用，所有具体的sql操作会写在service文件夹中，我也是为了方便操作的复用。
      // 此处我们调用的是 service 文件夹里面的student.js 文件里面的 list方法
      ctx.body = lists;
      // 将接收到返回的数据渲染出来，也可以用return的方式放回给前端
    } catch (error) {
      console.log(error)
    }
  }
  //新增用户
  async create() {
    const { ctx } = this;
    let student = { studentName: "张三", age: 12, gender: '男', phone: '12345678987' };
    let result = await ctx.service.student.create(student);
    if (result) {
      this.ctx.body = {
        code: 0,
        data: result
      }
    } else {
      this.ctx.body = {
        code: 1,
        data: '用户添加失败'
      }
    }
  }
  async add() {
    const { ctx } = this;
    console.log(ctx.request.body);
  }
}
module.exports = UserController;