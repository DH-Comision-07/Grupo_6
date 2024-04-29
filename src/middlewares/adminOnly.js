function adminOnly(req,res,next) {
    if (req.session.user == undefined || req.session.user.type != "admin") {
        res.redirect("/")
    } 
    else {
        next()
    }
}

module.exports = adminOnly;