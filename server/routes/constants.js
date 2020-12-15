// Google API
const GOOGLE_STRATEGY = 'google';
const GOOGLE_AUTHENTICATION = '/auth/google';
const GOOGLE_CALLBACK = '/auth/google/callback';

const BASE_API = '/api';

// User API
const ROOT_PAGE = '/';
const LOGIN_APP = '/surveys';
const LOGOUT = BASE_API + '/logout';
const CURRENT_USER = BASE_API + '/current_user';

// Billing API
const STRIPE = BASE_API + '/stripe';

module.exports = {
    GOOGLE_STRATEGY,
    GOOGLE_AUTHENTICATION,
    LOGOUT,
    CURRENT_USER,
    GOOGLE_CALLBACK,
    LOGIN_APP,
    ROOT_PAGE,
    STRIPE
};

