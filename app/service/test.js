const Service = require('egg').Service;

class TestService extends Service {
    async create(dic) {
        try {
            const role = await this.app.model.Test.create({
                info: dic.info,
            });
            if (role) {
                return {
                    success: true,
                    code: 200,
                    errorMsg: 'Create successful!',
                    data: role
                }
            }

            return {
                success: false,
                code: 500,
                errorMsg: 'Create  failed!',
                data: {}
            }
        } catch (e) {
            return {
                success: false,
                code: 500,
                errorMsg: `Query error: ${err}`,
                data: {}
            }
        }
    }

    async update(dic) {
        const modify = {};
        modify.info = dic.info;
        try {
            const res = await this.app.model.Test.update(modify, {
                where: {
                    id: dic.id,
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
                    msg: 'Update failed!'
                }
            }
        }
    }

    async delete(id) {
        try {
            const role = await await this.app.model.Test.findOne({
                where: {
                    id
                }
            });
            if (role) {
                const data = await await this.app.model.Test.destroy({
                    where: {
                        id
                    }
                });
                if (data) {
                    return {
                        success: true,
                        code: 200,
                        errorMsg: 'Delete successful',
                        data: {
                            msg: 'Delete successful!'
                        }
                    }
                }

            }
            return {
                success: true,
                code: 200,
                errorMsg: 'No this data in database.',
                data: {
                    msg: 'No this data in database.!'
                }
            }
        } catch (err) {
            return {
                success: false,
                code: 500,
                errorMsg: `Query error: ${err}`,
                data: {
                    msg: `Query error: ${err}`
                }
            }
        }
    }

    async getInfo(id) {
        try {
            if (id !== undefined) {
                const role = await await this.app.model.Test.findOne({
                    where: {
                        id: Number(id)
                    }
                });
                if (role) {
                    const list = [];
                    list.push(role);
                    return {
                        success: true,
                        code: 200,
                        errorMsg: 'Get Successful',
                        data: {
                            list
                        }
                    }
                }
            } else {
                const list = await await this.app.model.Test.findAll();
                if (list) {
                    return {
                        success: true,
                        code: 200,
                        errorMsg: 'Get Successful',
                        data: {
                            list
                        }
                    }
                }
            }
            return {
                success: true,
                code: 200,
                errorMsg: 'Get Successful',
                data: {
                    list: []
                }
            }
        } catch (err) {
            return {
                success: false,
                code: 500,
                errorMsg: `Query error: ${err}`,
                data: {
                    list: []
                }
            }
        }
    }
}
module.exports = TestService;