module.exports = {
    loged(req, res, next) {
        let name = ["Ada", "Greta", "Vim", "tim"]

        let user = name.find(name => req.query.user.toLowerCase() == name.toLowerCase())

        if (user == undefined) {
            res.send('No tiene privilegios para ingresar')
        }
        next()
    }
}