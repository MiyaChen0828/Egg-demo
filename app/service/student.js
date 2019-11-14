const Service = require('egg').Service;

class UserService extends Service {
  async list() {
    const ctx = this.ctx;
    return ctx.model.Student.find({});
    // ctx.model.Student.find({"title":"111"}) 表示在数据库中查找title 为111的对应数据
  }
  async create(student)  {
    const ctx = this.ctx;
    const result = await ctx.model.Student.create(student);
    return result;
 }
}
module.exports = UserService;