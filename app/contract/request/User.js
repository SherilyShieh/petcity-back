/*
 * @Author: Sherily Shieh 
 * @Date: 2021-01-Fr 05:28:37 
 * @Last Modified by:   Sherily Shieh 
 * @Last Modified time: 2021-01-Fr 05:28:37 
 */
'use strict'
module.exports = {

    Third: {
        uid: { type: 'string', required: true },
        channel: { type: 'string', required: true },
        first_name: { type: 'string', required: false },
        last_name: { type: 'string', required: false },
        email: { type: 'string', required: false },
    },

    Account: {
        uid: { type: 'string', required: true },
        channel: { type: 'string', required: true },
        first_name: { type: 'string', required: true },
        last_name: { type: 'string', required: true },
        email: { type: 'string', required: true },
        password: { type: 'string', required: true, min: 5, max: 20 },
    },

    Login: {
        email: { type: 'string', required: true },
        password: { type: 'string', required: true, min: 5, max: 20 },
    },

    Update: {
        uid: { type: 'string', required: true },
        first_name: { type: 'string', required: false },
        last_name: { type: 'string', required: false },
        email: { type: 'string', required: false },
        password: { type: 'string', required: false, min: 5, max: 20 },
        region: { type: 'string', required: false },
        district: { type: 'string', required: false },
        detail_address: { type: 'string', required: false },
        gender: { type: 'string', required: false },
        avatar: { type: 'string', required: false },

    }

}