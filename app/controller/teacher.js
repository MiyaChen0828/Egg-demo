const Controller = require('egg').Controller;

class TeacherController extends Controller {
  async list() {
    const ctx = this.ctx;
    const createRule = {
      name:{type: 'string'},
    //   age:{type:'number'}
    };
    try{
        console.log("===========teacher==========");
        console.log(ctx.query);
      ctx.validate(createRule,ctx.query);
      var result = await ctx.service.teacher.list();
      ctx.body = result;
    }catch (error) {
      console.log(error)
    }
  }
}
module.exports = TeacherController;