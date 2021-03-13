//this is the custom middleware file
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const token = req.header('auth-token')
    if (!token) return res.status(401).send('Access denaied');

    //verify the token
    try {
        const verified = jwt.verify(token, 'SUPERSECRET123')
        req.user = verified;
        next();
    } catch (e) {
        res.status(400).send('Invalid token')
    }
}