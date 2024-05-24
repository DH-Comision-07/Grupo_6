let userService = require('../model/userService')

async function userLoggedMid(req,res,next) {
    if (req.session.user != undefined) {
        res.locals.user = await userService.getById(req.session.user.id);
        res.locals.isLogged = true;
    }
    next()
}

module.exports = userLoggedMid;