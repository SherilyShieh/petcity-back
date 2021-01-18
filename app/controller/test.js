'use strict';

const Controller = require('egg').Controller;

/**
 * @Controller Test
 */

class TestController extends Controller {

    /**
     * @summary Api Test
     * @description test swagger doc 
     * @router get /api/v1/test
     * @request query string str 
     * @response 200 testResponse
     */
    async test() {
        const { ctx } = this;

        const str = ctx.query.str

        ctx.body = await {
            message: 'swagger is OK!!! and query is:' + str
        }
    }
}

module.exports = TestController;