module.exports = appInfo => {
    const config = exports = {};

    config.keys = keys = '_1595046215730_9281';

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    };

    config.news = {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    };

    config.middleware = [
        'robot'
    ];

    config.robot = {
        ua: [
            /curl/i,
            /Baiduspider/i,
        ],
    };

    // database 
    config.sequelize = {
        dialect: 'mysql',
        dialectOptions: {
            charset: 'utf8',
        },
        host: '127.0.0.1',
        port: 3306,
        database: 'petcity',
        username: 'root',
        password: 'root123456',
        define: {
            timestamps: false,
            paranoid: true,
            freezeTableName: true,
            underscored: false
        },
        timezone: '+08:00'
    };

    config.security = {
        csrf: {
            enable: false,
        },
        domainWhiteList: ['*'],
    };

    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };

    config.cluster = {
        listen: {
            port: 7701,
        },
    };

    config.redis = {
        client: {
            port: 6379, // Redis port
            host: '127.0.0.1', // Redis host
            password: '',
            db: 0,
        },
    };

    config.swaggerdoc = {
        dirScanner: './app/controller',
        apiInfo: {
            title: 'PetCity API',
            description: 'swagger-ui for petcity document.',
            version: '1.0.0',
        },
        schemes: ['http', 'https'],
        consumes: ['application/json', 'multipart/form-data'],
        produces: ['application/json', 'multipart/form-data'],
        securityDefinitions: {
            // apikey: {
            //   type: 'apiKey',
            //   name: 'clientkey',
            //   in: 'header',
            // },
            // oauth2: {
            //   type: 'oauth2',
            //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
            //   flow: 'password',
            //   scopes: {
            //     'write:access_token': 'write access_token',
            //     'read:access_token': 'read access_token',
            //   },
            // },
        },
        enableSecurity: false,
        // enableValidate: true,   
        routerMap: true,
        enable: true,
    };

    // config.joi = {
    //     options: {},
    //     locale: {
    //         'zh-cn': {}
    //     },
    //     throw: true,
    //     throwHandle: (error) => { return error; },
    //     errorHandle: (error) => { return error; },
    //     resultHandle: (result) => { return result; }
    // };

    exports.alinode = {
        server: 'wss://agentserver.node.aliyun.com:8080',
        appid: '87325',
        secret: '7301857eed610585cac5c828dc93c2d717d9ccb8',
        logdir: '/tmp/'
    };

    return config;

}