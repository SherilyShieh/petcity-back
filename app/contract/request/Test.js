'use strict'
module.exports = {
    TestInfo: {
        info: { type: 'string', required: true }
    },

    UpdateInfo: {
        id: { type: 'integer', required: true },
        info: { type: 'string', required: true }
    },

    DeleteInfo: {
        id: { type: 'integer', required: true }
    }
}