// const Controller = require('egg').Controller;

// class NewsController extends Controller {
//     // 同步，设置模板参数列表
//     async list() {
//         const dataList = {
//             list: [
//                 { id: 1, title: 'this is news 1', url: '/news/1' },
//                 { id: 2, title: 'this is news 2', url: '/news/2' }
//             ]
//         };
//         // 等待进入render
//         await this.ctx.render('news/list.tpl', dataList);
//     }
// }

// module.exports = NewsController;


const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
        const ctx = this.ctx;
        const page = ctx.query.page || 1;
        const newsList = await ctx.service.news.list(page);
        await this.ctx.render('news/list.tpl', { list: newsList });
    }
}

module.exports = NewsController;