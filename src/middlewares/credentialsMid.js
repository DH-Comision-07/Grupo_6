// mid que determinan acceso segun logueo

let credentialMid = {
    isLogged: function(req){
        return req.session.usuarioLogueado != undefinded;
    },

    isAdmin: function(user){
        return user.role == 9;
    },
    guestMid: function(req, res, next){
        if(this.isLogged(req))

        next();
    },

    adminMid: function(req, res, next){
        if(!this.isLogged(req)){}

    }



  


}

module.exports = credentialMid;