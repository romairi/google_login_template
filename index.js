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
require('./server/routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up productions assets
    // like our main.js file, or main.css file
    app.use(express.static('client/build'));

    // Express will server up the index.html file
    // if it does not recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`app listening on the port ${PORT}`));
