const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('../server/config/keys');


const middleware = app => {

    app.use(
        cookieSession({
            maxAge: 30 * 24 * 60 * 60 * 1000,
            keys: [keys.cookieKey]
        })
    );

    app.use(passport.initialize({}));
    app.use(passport.session({}));
};

module.exports = middleware;
