const Controller = require('egg').Controller;

/**
 * @Controller Test
 */

class TestController extends Controller {

    /**
     * @summary Api create
     * @description create Api 
     * @router put /api/v1/create
     * @request body TestInfo model
     */
    async create() {
        const { ctx } = this;
        const params = ctx.request.body;
        ctx.validate(ctx.rule.TestInfo, params);
        if (!params || !params.info) ctx.throw(500, 'Missing required parameters!')
        console.log(params);
        const result = await ctx.service.test.create(params);
        ctx.body = result;
    }

    /**
     * @summary Api update
     * @description update Api 
     * @router post /api/v1/update
     * @request body UpdateInfo model
     */
    async update() {
        const { ctx } = this;
        const params = ctx.request.body;
        ctx.validate(ctx.rule.UpdateInfo, params);
        if (!params || !params.info || !params.id) ctx.throw(500, 'Missing required parameters!')
        console.log(params);
        const result = await ctx.service.test.update(params);
        ctx.body = result;
    }

    /**
     * @summary Api delete
     * @description delete Api 
     * @router delete /api/v1/delete
     * @request body DeleteInfo model
     */
    async delete() {
        const { ctx } = this;
        const params = ctx.request.body;
        ctx.validate(ctx.rule.DeleteInfo, params);
        if (!params || !params.id) ctx.throw(500, 'Missing required parameters!')
        console.log(params);
        const result = await ctx.service.test.delete(params.id);
        ctx.body = result;
    }

    /**
     * @summary Api getInfo
     * @description getInfo Api 
     * @router get /api/v1/getInfo
     * @request query integer id
     */
    async getInfo() {
        const { ctx } = this;
        const id = ctx.query.id
        console.log('query: id = ', id);
        const result = await ctx.service.test.getInfo(id);
        ctx.body = result;
    }
}

module.exports = TestController;