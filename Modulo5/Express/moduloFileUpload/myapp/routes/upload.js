var express = require('express');
var router = express.Router();

/*
Los js de routes se dedican a marcar el camino por donde pasaran los datos utilizando metodos.
Los Metodos son los siguientes:
   GET: recupera recursos.
   POST: crea un recurso.
   PUT: modifica un recurso.
   DELETE: elimina un recurso.
*/

//Aqui se declara a dodne ira a buscar el controlador 
var controlador = require("../controllers/controladores");

//GET
router.get('/', function(req, res, next) {

	res.render('upload');
  });

//POST
router.post('/', controlador.postNuevo);

//PUT
router.put('/', controlador.favs);
