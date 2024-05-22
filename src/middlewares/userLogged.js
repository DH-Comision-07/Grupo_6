let userService = require('../data/userService')

async function userLoggedMid(req,res,next) {
    if (req.session.isLogged) {
        res.locals.user = await userService.getByUsername(req.session.user.username);
        res.locals.isLogged = true;
    }
    next()
}

module.exports = userLoggedMid;