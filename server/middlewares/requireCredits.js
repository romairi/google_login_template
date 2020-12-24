const {StatusCodes} = require('http-status-codes');

module.exports = (req, res, next) => {
    if (req.user.credits < 0) {
        return res.status(StatusCodes.PAYMENT_REQUIRED).send({error: 'Not enough credits!'});
    }

    next();
};
