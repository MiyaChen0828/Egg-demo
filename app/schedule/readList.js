var k = 110;
module.exports = {
    schedule:{
        // cron: '0 45 16 * * 4', //每周一的5点30分0秒更新
        interval:'5m',
        type:'all'
    },
    async task(ctx){
        ++k;
        console.log(k)
        var result  = await ctx.service.student.list();
        console.log("=============schedule==============");
        console.log(result)
    }
}