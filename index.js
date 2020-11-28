const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./server/config/keys');
require('./server/services/passport');

mongoose.connect(keys.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, () => console.log('The connection succeeded to mongoDB!!!')
);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize({}));
app.use(passport.session({}));

require('./server/routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`app listening on the port ${PORT}`));
