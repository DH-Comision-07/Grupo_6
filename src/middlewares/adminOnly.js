const roleService = require('../model/roleService')

async function adminOnly(req,res,next) {
    let adminId = await roleService.getBy("admin")

    if (req.session.user == undefined || req.session.user.role_id != adminId) {
        res.redirect("/")
    } 
    else {
        next()
    }
}

module.exports = adminOnly;