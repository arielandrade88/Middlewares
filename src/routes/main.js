var express = require('express');
var router = express.Router();
let { main } = require('../controllers/mainController.js')

/* GET home page. */
router.get('/', main);



module.exports = router;