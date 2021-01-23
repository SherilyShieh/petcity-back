/*
 * @Author: Sherily Shieh 
 * @Date: 2021-01-Mo 02:53:51 
 * @Last Modified by:   Sherily Shieh 
 * @Last Modified time: 2021-01-Mo 02:53:51 
 */
'use strict'

module.exports = {

    CreateAd: {
        user_id: { type: 'integer', required: true },
        type: { type: 'string', required: true },
        dog_breed: { type: 'string', required: true },
        price: { type: 'string', required: true },
        date: { type: 'string', required: true },
        start_time: { type: 'string', required: true },
        duration: { type: 'string', required: true },
        description: { type: 'string', required: false },
        region: { type: 'string', required: true },
        district: { type: 'string', required: false },
    },

    UpdateAd: {
        ad_id: { type: 'integer', required: true },
        user_id: { type: 'integer', required: true },
        dog_breed: { type: 'string', required: false },
        price: { type: 'string', required: false },
        date: { type: 'string', required: false },
        start_time: { type: 'string', required: false },
        duration: { type: 'string', required: false },
        description: { type: 'string', required: false },
        region: { type: 'string', required: false },
        district: { type: 'string', required: false }
    },

    AddContacted: {
        ad_id: { type: 'integer', required: true },
        user_id: { type: 'integer', required: true },
    },

    DeleteContacted: {
        contacted_id: { type: 'integer', required: true },
        user_id: { type: 'integer', required: true },
    }
}