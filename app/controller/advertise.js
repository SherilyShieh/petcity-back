/*
 * @Author: Sherily Shieh 
 * @Date: 2021-01-Mo 02:54:07 
 * @Last Modified by:   Sherily Shieh 
 * @Last Modified time: 2021-01-Mo 02:54:07 
 */
const Controller = require('egg').Controller;

/**
 * @Controller Advertise
 */

class AdvertiseController extends Controller {

    /**
     * @summary Api postAd
     * @description postAd Api 
     * @router put /api/v1/postAd
     * @request body CreateAd model
     */
    async postAd() {
        const { ctx } = this;
        const params = ctx.request.body;
        ctx.validate(ctx.rule.CreateAd, params);
        if (!params || !params.user_id) ctx.throw(500, 'Missing required parameters!')
        console.log(params);
        const result = await ctx.service.advertise.postAd(params);
        ctx.body = result;
    }

    /**
     * @summary Api updateAd
     * @description updateAd Api 
     * @router post /api/v1/updateAd
     * @request body UpdateAd model
     */
    async updateAd() {
        const { ctx } = this;
        const params = ctx.request.body;
        ctx.validate(ctx.rule.UpdateAd, params);
        if (!params || !params.user_id || !params.ad_id) ctx.throw(500, 'Missing required parameters!')
        console.log(params);
        const result = await ctx.service.advertise.updateAd(params);
        ctx.body = result;
    }

    /**
     * @summary Api getAllAds
     * @description getAllAds Api 
     * @router get /api/v1/getAllAds
     * @request query integer *index
     * @request query integer *page_size
     * @request query string dog_breed
     * @request query string region
     * @request query string district
     */
    async getAllAds() {
        const { ctx } = this;
        const index = ctx.query.index;
        const pageSize = ctx.query.page_size;
        if (!index || !pageSize) ctx.throw(500, 'Missing required parameters!');
        if (Number(index) <= 0 || Number(pageSize) < 0) ctx.throw(500, 'Invalid parameter!');
        const result = await ctx.service.advertise.getAllAds(Number(index), Number(pageSize), ctx.query.dog_breed, ctx.query.region, ctx.query.district);
        ctx.body = result;

    }

    /**
     * @summary Api getMyAds
     * @description getMyAds Api 
     * @router get /api/v1/getMyAds
     * @request query integer *index
     * @request query integer *page_size
     * @request query integer *user_id
     */
    async getMyAds() {
        const { ctx } = this;
        const index = ctx.query.index;
        const pageSize = ctx.query.page_size;
        const userId = ctx.query.user_id
        if (!index || !pageSize || !userId) ctx.throw(500, 'Missing required parameters!');
        if (Number(index) <= 0 || Number(pageSize) < 0 || Number(userId) < 0) ctx.throw(500, 'Invalid parameter!');
        const result = await ctx.service.advertise.getMyAds(Number(index), Number(pageSize), Number(userId));
        ctx.body = result;

    }


    /**
     * @summary Api addContacted
     * @description addContacted Api 
     * @router put /api/v1/addContacted
     * @request body AddContacted model
     */
    async addContacted() {
        const { ctx } = this;
        const params = ctx.request.body;
        ctx.validate(ctx.rule.AddContacted, params);
        if (!params || !params.user_id || !params.ad_id) ctx.throw(500, 'Missing required parameters!')
        console.log(params);
        const result = await ctx.service.advertise.addContacted(params);
        ctx.body = result;
    }

    /**
     * @summary Api deleteMyAds
     * @description deleteMyAds Api 
     * @router delete /api/v1/deleteMyAds
     * @request body AddContacted model
     */
    async deleteMyAds() {
        const { ctx } = this;
        const params = ctx.request.body;
        ctx.validate(ctx.rule.AddContacted, params);
        if (!params || !params.user_id || !params.ad_id) ctx.throw(500, 'Missing required parameters!')
        console.log(params);
        const result = await ctx.service.advertise.deleteMyAds(params);
        ctx.body = result;
    }

    /**
     * @summary Api getAllContacted
     * @description getAllContacted Api 
     * @router get /api/v1/getAllContacted
     * @request query integer *index
     * @request query integer *page_size
     * @request query integer *user_id
     */
    async getAllContacted() {
        const { ctx } = this;
        const index = ctx.query.index;
        const pageSize = ctx.query.page_size;
        const userId = ctx.query.user_id
        if (!index || !pageSize || !userId) ctx.throw(500, 'Missing required parameters!');
        if (Number(index) <= 0 || Number(pageSize) < 0 || Number(userId) < 0) ctx.throw(500, 'Invalid parameter!');
        const result = await ctx.service.advertise.getAllContacted(Number(index), Number(pageSize), Number(userId));
        ctx.body = result;

    }

    /**
     * @summary Api deleteContacted
     * @description deleteContacted Api 
     * @router delete /api/v1/deleteContacted
     * @request body DeleteContacted model
     */
    async deleteContacted() {
        const { ctx } = this;
        const params = ctx.request.body;
        ctx.validate(ctx.rule.DeleteContacted, params);
        if (!params || !params.user_id || !params.contacted_id) ctx.throw(500, 'Missing required parameters!')
        console.log(params);
        const result = await ctx.service.advertise.deleteContacted(params);
        ctx.body = result;
    }

    async saveAvatar() {
        const { ctx } = this;
        const parts = ctx.multipart({ autoFields: true });
        let files = {};
        let stream;
        while ((stream = await parts()) != null) {
            if (!stream.filename) {
                break;
            }
            const fieldname = stream.fieldname; // file表单的名字
            const dir = await this.service.tools.getUploadFile(stream.filename);
            const target = dir.uploadDir;
            const writeStream = fs.createWriteStream(target);

            await pump(stream, writeStream);

            files = Object.assign(files, {
                [fieldname]: dir.saveDir
            });
        }

        if (Object.keys(files).length > 0) {
            ctx.body = {
                success: true,
                code: 200,
                errorMsg: 'Save avatar successful!',
                data: files
            }
        } else {
            ctx.body = {
                success: false,
                code: 500,
                message: 'Save avatar failed!',
                data: {}
            }
        }
    }
}

module.exports = AdvertiseController;