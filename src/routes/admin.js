var express = require('express');
var router = express.Router();
let { admin } = require('../controllers/adminController.js')
let { loged } = require('../middlewares/userAdmin')

/* GET home page. */
router.get('/', loged, admin);



module.exports = router;