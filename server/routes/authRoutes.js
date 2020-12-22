const passport = require('passport');
const {
    GOOGLE_STRATEGY,
    GOOGLE_AUTHENTICATION,
    CURRENT_USER,
    LOGIN_APP,
    LOGOUT,
    GOOGLE_CALLBACK,
    ROOT_PAGE
} = require("./constants");


module.exports = app => {
    app.get(GOOGLE_AUTHENTICATION, passport.authenticate(GOOGLE_STRATEGY, {
        scope: ['profile', 'email']
    }));

    app.get(
        GOOGLE_CALLBACK,
        passport.authenticate(GOOGLE_STRATEGY),
        (req, res) => {
            res.redirect(LOGIN_APP);
        }
    );

    app.get(LOGOUT, (req, res) => {
        req.logout();
        res.redirect(ROOT_PAGE);
    });

    app.get(CURRENT_USER, (req, res) => {
        res.send(req.user);
    });
};
