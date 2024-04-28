function adminOnly(req,res,next) {
    if (req.session.user.type != "admin") {
        res.redirect("/cuenta/login")
    } else {
        next()
    }
    
}

module.exports = adminOnly;