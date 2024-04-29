function guestOnly(req,res,next) {
    if (req.session.isLogged == true) {
        res.redirect("/")  
    } else {
        next()
    }
}

module.exports = guestOnly;