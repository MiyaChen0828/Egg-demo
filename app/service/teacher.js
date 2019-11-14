const Service = require('egg').Service;

class TeacherService extends Service {
  async list() {
    const ctx = this.ctx;
    return ctx.model.Teacher.find({})
  }
}
module.exports = TeacherService;