/*
 * @Author: Sherily Shieh 
 * @Date: 2021-01-Fr 05:26:48 
 * @Last Modified by:   Sherily Shieh 
 * @Last Modified time: 2021-01-Fr 05:26:48 
 */
'use strict';

const Controller = require('egg').Controller;

/**
 * @Controller User
 */

class UserController extends Controller {

    /**
     * @summary Api signUp
     * @description signUp Api 
     * @router put /api/v1/signUp
     * @request body Third model
     * @response 200 JsonResponse
     */
    async signUp() {
        const { ctx } = this;
        const params = ctx.request.body;
        ctx.validate(ctx.rule.Third, params);
        if (!params || !params.uid) ctx.throw(500, 'Missing required parameters!')
        console.log(params);
        const result = await ctx.service.user.signUp(params);
        ctx.body = result;
    }

    /**
     * @summary Api register
     * @description register Api 
     * @router put /api/v1/register
     * @request body Account model
     * @response 200 JsonResponse
     */
    async register() {
        const { ctx } = this;
        const params = ctx.request.body;
        ctx.validate(ctx.rule.Account, params);
        if (!params || !params.uid) ctx.throw(500, 'Missing required parameters!')
        console.log(params);
        const result = await ctx.service.user.register(params);
        ctx.body = result;
    }

    /**
     * @summary Api getUser
     * @description getUser Api 
     * @router get /api/v1/getUser
     * @request query string *uid
     * @response 200 JsonResponse
     */
    async getUser() {
        const { ctx } = this;
        const uid = ctx.query.uid;
        if (!uid) ctx.throw(500, 'Missing required parameters!')
        const result = await ctx.service.user.getUser(uid);
        ctx.body = result;

    }

    /**
     * @summary Api verifyEmail
     * @description verifyEmail Api 
     * @router get /api/v1/verifyEmail
     * @request query string *email
     * @response 200 JsonResponse
     */
    async verifyEmail() {
        const { ctx } = this;
        const email = ctx.query.email;
        if (!email) ctx.throw(500, 'Missing required parameters!')
        const result = await ctx.service.user.verifyEmail(email);
        ctx.body = result;

    }

    /**
     * @summary Api updateProfile
     * @description updateProfile Api 
     * @router post /api/v1/updateProfile
     * @request body Update model
     * @response 200 JsonResponse
     */
    async updateProfile() {
        const { ctx } = this;
        const params = ctx.request.body;
        ctx.validate(ctx.rule.Update, params);
        if (!params || !params.uid) ctx.throw(500, 'Missing required parameters!')
        console.log(params);
        const result = await ctx.service.user.updateProfile(params);
        ctx.body = result;
    }

}

module.exports = UserController;