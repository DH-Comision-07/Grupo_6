function loggedOnly(req,res,next) {
    if (req.session.user == undefined) {
        res.redirect("/cuenta/login")
    } else {
        next()
    }
}

module.exports = loggedOnly;