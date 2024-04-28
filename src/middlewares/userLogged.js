function userLoggedMid(req,res,next) {
    if (req.session.isLogged) {
        res.locals.user = req.session.user;
        res.locals.isLogged = true;
    }
    next()
}

module.exports = userLoggedMid;