const express = require('express');
const mongoose = require('mongoose');
const middleware = require('./server/middleware');
const keys = require('./server/config/keys');
require('./server/services/passport');

mongoose.connect(keys.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, () => console.log('The connection succeeded to mongoDB!!!')
);

const app = express();

middleware(app);


require('./server/routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`app listening on the port ${PORT}`));
