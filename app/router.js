module.exports = app => {
    const { router, controller } = app;
    // router.get('/', controller.home.index);
    // router.get('/news', controller.news.list);
    router.redirect('/', '/swagger-ui.html', 302);
};