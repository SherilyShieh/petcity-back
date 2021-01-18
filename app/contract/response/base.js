'use strict'
module.exports = {
    // test
    testResponse: {
        message: { type: 'string' }
    },

    // json response
    JsonResponse: {
        success: { type: 'boolean' },
        code: { type: 'integer' },
        errorMsg: { type: 'string' },
        data: { type: '*' }
    }

};