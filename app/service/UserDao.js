'use strict'
const Service = require('egg').Service;

class UserDaoService extends Service {
    async createUser(dic) {
        if (!dic.email || !dic.uid || !dic.first_name) {
            throw new Error('Missing necessary parameters!');
        }

        const exit = await this.app.model.User.findAll({ where: { uid: dic.uid } });
        if (exit && exit.length > 0) {
            throw new Error("This user already exists, please login!")
        }
        const role = await this.app.model.User.create({
            first_name: dic.first_name,
            last_name: dic.last_name,
            email: dic.email,
            password: dic.password || '123456',
            region: dic.region,
            district: dic.district,
            detail_address: dic.detail_address,
            gender: dic.gender,
            avatar: dic.avatar,
            created_time: Date.now()
        });
        if (role) {
            return role.user_id;
        }

        throw new Error('register failed!');
    }

}