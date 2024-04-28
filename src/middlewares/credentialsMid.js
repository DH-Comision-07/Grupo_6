
let credentialMid = {
    isLogged: function(req){
        return req.session.usuarioLogueado != undefinded;
    }
    // isAdmin: function(user){
    //     return user.role == 9;
    // },
    // guestMid: function(req, res, next){
    //     if(this.isLogged(req))

    //     next();
    // },

    // adminMid: function(req, res, next){
    //     if(!this.isLogged(req)|| !this.isAdmin(req)){
    //         res.send("No tienes permiso para ver esta página").status(401);
    //     }
    //     next();
    // },
    // currentUserMid: function(req, res, next){
    //     if(this.isLogged(req)){
    //         res.locals.usuario = req.session.usuarioLogueado;
    //         // res.locals.isAdmin =
    //     }
    //     next();
    // },
    // acceso: function(req, res, next){
    //     if(!this.isLogged(req) && req.cookies.email){
    //         req.session.usuarioLogueado = archivoUsuarios.find(usuario => usuario.email == req.cookies.email);
    //     }
    //     next();
    // }
}

module.exports = credentialsMid;
