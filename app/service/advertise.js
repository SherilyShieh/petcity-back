/*
 * @Author: Sherily Shieh 
 * @Date: 2021-01-Mo 02:54:12 
 * @Last Modified by:   Sherily Shieh 
 * @Last Modified time: 2021-01-Mo 02:54:12 
 */
const Service = require('egg').Service;

class AdvertiseService extends Service {

    async postAd(dic) {
        console.log(dic);
        try {
            const role = await this.app.model.Advertise.create({
                user_id: dic.user_id,
                type: dic.type,
                dog_breed: dic.dog_breed,
                price: dic.price,
                date: dic.date,
                start_time: dic.start_time,
                duration: dic.duration,
                description: dic.description,
                region: dic.region,
                district: dic.district,
                created_time: new Date(),
                updated_time: new Date()
            });
            if (role) {
                return {
                    success: true,
                    code: 200,
                    errorMsg: 'Post advertise successful!',
                    data: role
                }
            }

            return {
                success: false,
                code: 500,
                errorMsg: 'Post advertise  failed!',
                data: {}
            }
        } catch (e) {
            return {
                success: false,
                code: 500,
                errorMsg: `Query error: ${err}`,
                data: {
                    total_count: 0,
                    page_index: index,
                    page_size: pageSize,
                    list: []
                }
            }
        }

    }

    async updateAd(dic) {
        const modify = {};
        if (dic.dog_breed !== undefined) {
            modify.dog_breed = dic.dog_breed;
        }
        if (dic.price !== undefined) {
            modify.price = dic.price;
        }
        if (dic.date !== undefined) {
            modify.date = dic.date;
        }
        if (dic.start_time !== undefined) {
            modify.start_time = dic.start_time;
        }
        if (dic.duration !== undefined) {
            modify.duration = dic.duration;
        }
        if (dic.description !== undefined) {
            modify.description = dic.description;
        }
        if (dic.region !== undefined) {
            modify.region = dic.region;
        }
        if (dic.district !== undefined) {
            modify.district = dic.district;
        }
        const Op = this.app.Sequelize.Op;
        try {
            const res = await this.app.model.Advertise.update(modify, {
                where: {

                }
            });
            if (res[0] >= 0) {
                return {
                    success: true,
                    code: 200,
                    errorMsg: 'Update successful!',
                    data: {
                        msg: 'Update successful!'
                    }

                }
            } else {
                return {
                    success: false,
                    code: 500,
                    errorMsg: 'Update failed!',
                    data: {
                        msg: 'Update failed!'
                    }

                }
            }
        } catch (err) {
            return {
                success: false,
                code: 500,
                errorMsg: `Query error: ${err}`,
                data: {
                    total_count: 0,
                    page_index: index,
                    page_size: pageSize,
                    list: []
                }
            }
        }

    }

    async getAllAds(index, pageSize, breed, region, district) {
        const Op = this.app.Sequelize.Op;
        try {
            let whereContent = {}
            if (region !== undefined) {
                whereContent.region = region;
            }
            if (district !== undefined) {
                whereContent.district = district;
            }
            if (breed !== undefined) {
                whereContent.dog_breed = breed;
            }

            const { count, rows } = await this.app.model.Advertise.findAndCountAll({
                offset: (index - 1) * pageSize,
                limit: pageSize,
                where: whereContent,
                order: [
                    ["updated_time", "desc"]
                ],
                distinct: true,
                raw: true
            });
            if (count > 0) {
                const ll = [];
                for (var row of rows) {
                    var user = await this.app.model.User.findOne({ where: { user_id: row.user_id }, raw: true });
                    if (!user) user = {};
                    // var uu = user.toJSON();
                    row.user = user;
                    console.log('user---------', user);
                    console.log('row---------', row);
                    ll.push(row);
                }
                console.log('ll--------', ll);
                return {
                    success: true,
                    code: 200,
                    errorMsg: 'Successful!',
                    data: {
                        total_count: count,
                        page_index: index,
                        page_size: pageSize,
                        list: ll
                    }
                }

            } else {
                return {
                    success: true,
                    code: 200,
                    errorMsg: 'Successful!',
                    data: {
                        total_count: 0,
                        page_index: index,
                        page_size: pageSize,
                        list: []
                    }
                }
            }
        } catch (err) {
            return {
                success: false,
                code: 500,
                errorMsg: `Query error: ${err}`,
                data: {
                    total_count: 0,
                    page_index: index,
                    page_size: pageSize,
                    list: []
                }
            }
        }


    }


    async getMyAds(index, pageSize, userId) {
        try {
            const { count, rows } = await this.app.model.Advertise.findAndCountAll({
                where: {
                    user_id: userId
                },
                offset: (index - 1) * pageSize,
                limit: pageSize,
                order: [
                    ["updated_time", "desc"]
                ],
                distinct: true,
                raw: true
            });
            if (count > 0) {
                const ll = [];
                for (var row of rows) {
                    var user = await this.app.model.User.findOne({ where: { user_id: row.user_id }, raw: true });
                    if (!user) user = {};
                    // var uu = user.toJSON();
                    row.user = user;
                    console.log('user---------', user);
                    console.log('row---------', row);
                    ll.push(row);
                }
                console.log('ll--------', ll);
                return {
                    success: true,
                    code: 200,
                    errorMsg: 'Successful!',
                    data: {
                        total_count: count,
                        page_index: index,
                        page_size: pageSize,
                        list: ll
                    }
                }

            } else {
                return {
                    success: true,
                    code: 200,
                    errorMsg: 'Successful!',
                    data: {
                        total_count: 0,
                        page_index: index,
                        page_size: pageSize,
                        list: []
                    }
                }
            }
        } catch (err) {
            return {
                success: false,
                code: 500,
                errorMsg: `Query error: ${err}`,
                data: {
                    total_count: 0,
                    page_index: index,
                    page_size: pageSize,
                    list: []
                }
            }
        }


    }

    async deleteMyAds(dic) {
        const Op = this.app.Sequelize.Op;
        try {
            const role = await await this.app.model.Advertise.findOne({
                where: {
                    [Op.and]: [{ ad_id: dic.ad_id }, { user_id: dic.user_id }]
                }
            });
            if (role) {
                const data = await await this.app.model.Advertise.destroy({
                    where: {
                        [Op.and]: [{ ad_id: dic.ad_id }, { user_id: dic.user_id }]
                    }
                });
                console.log('destory--------', data);
                const count = await this.app.model.Contacted.findOrCreate({ where: { ad_id: dic.ad_id } });
                const data2 = await await this.app.model.Contacted.destroy({
                    where: { ad_id: dic.ad_id }
                });
                if (data && data2) {
                    return {
                        success: true,
                        code: 200,
                        errorMsg: 'Delete successful',
                        data: {}
                    }
                }
                return {
                    success: true,
                    code: 200,
                    errorMsg: 'No this data in database.',
                    data: {}
                }

            }
        } catch (err) {
            return {
                success: false,
                code: 500,
                errorMsg: `Query error: ${err}`,
                data: {}
            }
        }

    }

    async addContacted(dic) {
        try {
            const role = await this.app.model.Contacted.findOrCreate({
                where: {
                    user_id: dic.user_id,
                    ad_id: dic.ad_id,
                },
                raw: true
            });
            if (role) {
                return {
                    success: true,
                    code: 200,
                    errorMsg: 'Add contacted successful!',
                    data: role[0]
                }
            }

            return {
                success: false,
                code: 500,
                errorMsg: 'Add contacted failed!',
                data: {}
            }
        } catch (err) {
            return {
                success: false,
                code: 500,
                errorMsg: `Query error: ${err}`,
                data: {}
            }
        }


    }

    async getAllContacted(index, pageSize, userId) {
        try {
            const { count, rows } = await this.app.model.Contacted.findAndCountAll({
                where: {
                    user_id: userId
                },
                offset: (index - 1) * pageSize,
                limit: pageSize,
                distinct: true,
                raw: true
            });
            if (count > 0) {
                const ll = [];
                for (var row of rows) {
                    var ad = await this.app.model.Advertise.findOne({ where: { ad_id: row.ad_id }, raw: true });
                    if (!ad) {
                        ad = {};
                    } else {
                        var user = await this.app.model.User.findOne({ where: { user_id: ad.user_id }, raw: true });
                    }
                    ad.user = user;
                    console.log('user---------', user);
                    console.log('row---------', row);
                    ll.push(row);
                }
                console.log('ll--------', ll);
                return {
                    success: true,
                    code: 200,
                    errorMsg: 'Successful!',
                    data: {
                        total_count: count,
                        page_index: index,
                        page_size: pageSize,
                        list: ll
                    }
                }

            } else {
                return {
                    success: true,
                    code: 200,
                    errorMsg: 'Successful!',
                    data: {
                        total_count: 0,
                        page_index: index,
                        page_size: pageSize,
                        list: []
                    }
                }
            }
        } catch (err) {
            return {
                success: false,
                code: 500,
                errorMsg: `Query error: ${err}`,
                data: {}
            }
        }
    }

    async deleteContacted(dic) {
        const Op = this.app.Sequelize.Op;
        try {
            const role = await await this.app.model.Contacted.findOne({
                where: {
                    [Op.and]: [{ contacted_id: dic.contacted_id }, { user_id: dic.user_id }]
                }
            });
            if (role) {
                const data = await await this.app.model.Contacted.destroy({
                    where: {
                        [Op.and]: [{ contacted_id: dic.contacted_id }, { user_id: dic.user_id }]
                    }
                });
                console.log('destory--------', data);
                if (data) {
                    return {
                        success: true,
                        code: 200,
                        errorMsg: 'Delete successful',
                        data: {}
                    }
                }
                return {
                    success: true,
                    code: 200,
                    errorMsg: 'No this data in database.',
                    data: {}
                }

            }
        } catch (err) {
            return {
                success: false,
                code: 500,
                errorMsg: `Query error: ${err}`,
                data: {}
            }
        }
    }

}
module.exports = AdvertiseService;