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


//clientID = "759155158-1pe4vcds60g3nopqm6kmhht6alqd9t8n.apps.googleusercontent.com"
//clientSecret = "pOfK8ZidxmnpbaV8Z0T-wOnU"
// userName = admin_roman
// password = xCX3a22N6fkRjHi6
// connection = mongodb+srv://admin_roman:<password>@googleprod.87dyn.mongodb.net/<dbname>?retryWrites=true&w=majority
