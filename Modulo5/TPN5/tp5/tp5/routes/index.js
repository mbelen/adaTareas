var express = require('express');
var router = express.Router();
var controlador = require('../controller/control');

//GET
router.get('/', controlador.renIndex);

//POST
router.post('/', controlador.keepData);

module.exports = router;
