'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log("======#this=========");
    this.ctx.helper.formatTime();
    //设置session
    this.ctx.session.sessionFlag = "我是session";
    await this.ctx.render('home');
  }

  //设置cookie
  //获取cookie
  async getCookie() {
    this.ctx.cookies.set("name", "张三", {
      maxAge: 24 * 3600 * 1000,
      httpOnly: true, // by default it's true
      signed: true,
      encrypt: true, // 加密，并且可以设置为中文
    });
    let sessionFlag = this.ctx.session.sessionFlag;
    let name = this.ctx.cookies.get("name", {
      encrypt: true,
    });
    await this.ctx.render('getCookie', {
      name,
      sessionFlag
    });
  }
  //清除cookie
  async clearCookie() {
    // this.ctx.cookies.set("name", null);
    this.ctx.cookies.set("name", {
      maxAge: 0,
    });
    this.ctx.redirect("/")
  }
}

module.exports = HomeController;
