module.exports = appIbnfo => {
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
    };

    config.swaggerdoc = {
        dirScanner: './app/controller',
        apiInfo: {
            title: 'PetCity API',
            description: 'swagger-ui for petcity document.',
            version: '1.0.0',
        },
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
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


    return config;

}