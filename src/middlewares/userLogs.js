const fs = require('fs');

module.exports = {
    userLog: (req, res, next) => {
        fs.appendFileSync('src/logs/userLogs.txt', 'El usuario ingreso a la ruta: ' + req.url + ' - ')

        next();
    }

}