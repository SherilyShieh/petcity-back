/*
 * @Author: Sherily Shieh 
 * @Date: 2021-01-Mo 02:56:00 
 * @Last Modified by:   Sherily Shieh 
 * @Last Modified time: 2021-01-Mo 02:56:00 
 */
'use strict'
const Service = require('egg').Service;

class UserService extends Service {
    async signUp(dic) {

        const uid = dic.uid;
        const channel = dic.channel;
        if (await this.isUidExist(uid)) {
            // login
            return {
                success: true,
                code: 200,
                errorMsg: '',
                data: {
                    uid,
                    msg: 'login successful!'
                }
            }
        } else {
            const role = await this.app.model.User.create({
                uid,
                channel,
                first_name: dic.first_name,
                last_name: dic.last_name,
                email: dic.email,
                created_time: new Date(),
                updated_time: new Date()
            });
            if (role) {
                return {
                    success: true,
                    code: 200,
                    errorMsg: ' ',
                    data: {
                        uid,
                        msg: 'SignUp  successful!'
                    }
                }
            }

            return {
                success: false,
                code: 500,
                errorMsg: 'SignUp  failed!',
                data: {
                    uid: ' ',
                    msg: 'SignUp  failed!'
                }
            }
        }
    }

    async register(dic) {

        if (await this.isUidExist(uid)) {
            // login
            return {
                success: true,
                code: 500,
                errorMsg: 'This email has been registered, please get a new one!',
                data: {
                    uid,
                    msg: 'This email has been registered, please get a new one!'
                }
            }
        } else {

            const role = await this.app.model.User.create({
                uid,
                channel,
                first_name: dic.first_name,
                last_name: dic.last_name,
                email: dic.email,
                password: dic.password,
                created_time: new Date(),
                updated_time: new Date()
            });
            if (role) {
                return {
                    success: true,
                    code: 200,
                    errorMsg: ' ',
                    data: {
                        uid,
                        msg: 'SignUp  successful!'
                    }
                }
            }

            return {
                success: false,
                code: 500,
                errorMsg: 'SignUp  failed!',
                data: {
                    uid: ' ',
                    msg: 'SignUp  failed!'
                }
            }
        }
    }

    async getUser(uid) {

        const exist = await this.app.model.User.findOne({ where: { uid } });
        if (!exist) {
            return {
                success: false,
                code: 500,
                errorMsg: 'The user was not found！',
                data: {}
            }
        }
        return {
            success: true,
            code: 200,
            errorMsg: 'Successfully!',
            data: exist
        }
    }

    async verifyEmail(email) {
        if (!email) {
            return {
                success: false,
                code: 500,
                errorMsg: 'Missing required parameter: email!',
                data: {}
            }
        }
        const exist = await this.app.model.User.findOne({ where: { email } });
        if (!exist) {
            return {
                success: false,
                code: 500,
                errorMsg: 'The current email has not been registered!',
                data: {}
            }
        }
        return {
            success: true,
            code: 200,
            errorMsg: 'Successfully!',
            data: exist
        }
    }

    async isUidExist(uid) {

        const exist = await this.app.model.User.findOne({ where: { uid } });
        console.log(exist);
        if (exist) {
            return true;
        }
        return false;

    }

    async isEmailExist(email) {
        if (email) {
            const exist = await this.app.model.User.findOne({ where: { email } });
            if (exist) {
                return true;
            }
        }
        return false;
    }

    async updateProfile(user) {
        if (!user || !user.uid) {
            return {
                success: false,
                code: 500,
                errorMsg: 'Missing required parameters',
                data: {}
            }
        }
        const modify = {};
        if (user.avatar !== undefined) {
            modify.avatar = user.avatar;
        }
        if (user.first_name !== undefined) {
            modify.first_name = user.first_name;
        }
        if (user.last_name !== undefined) {
            modify.last_name = user.last_name;
        }
        if (user.email !== undefined) {
            modify.email = user.email;
        }
        if (user.region !== undefined) {
            modify.region = user.region;
        }
        if (user.district !== undefined) {
            modify.district = user.district;
        }
        if (user.detail_address !== undefined) {

            modify.detail_address = user.detail_address;
        }
        if (user.password !== undefined) {
            modify.password = user.password;
        }
        if (user.gender !== undefined) {
            modify.gender = user.gender;
        }
        const res = await this.app.model.User.update(modify, {
            where: { uid: user.uid },
        });
        if (res[0] >= 0) {
            const exist = await this.app.model.User.findOne({ where: { uid: user.uid } });
            return {

                success: true,
                code: 200,
                errorMsg: 'Update successful!',
                data: exist

            }
        } else {
            return {

                success: false,
                code: 500,
                errorMsg: 'Update failed!',
                data: {}

            }
        }

    }



}

module.exports = UserService;