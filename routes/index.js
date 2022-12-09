const homePage = require('./home_page')
const castPage = require('./cast_page')

function route(app) {
    // app.use('/news', newsRouter);
    // app.use('/me', meRouter);
    // app.use('/courses', coursesRouter);

    app.use('/', homePage);
    app.use('/casts', castPage);
}

module.exports = route;