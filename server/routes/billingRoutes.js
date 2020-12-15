const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const {STRIPE} = require("./constants");
const requireLogin = require('../middlewares/requireLogin');


module.exports = app => {
    app.post(STRIPE, requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for product',
            source: req.body.id
        });

        req.user.credits += 1;
        const user = await req.user.save();

        res.send(user);
    });
};
