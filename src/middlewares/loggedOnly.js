function loggedOnly(req,res,next) {
    if (req.session.isLogged != true) {
        res.redirect("/cuenta/login")
    } else {
        next()
    }
}

module.exports = loggedOnly;