function guestOnly(req,res,next) {
    if (req.session.isLogged == true) {
        res.redirect("/")  // rutas solo para no logeados llevan a home, no hya perfil
    } else {
        next()
    }
}

module.exports = guestOnly;