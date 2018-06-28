//Estos son js que sirven de mediadores para saber si un recurso esta disponible o no.

var servicio = require('../services/logica');
var runIt = {};

//lo siguiente es la llamada a la pantalla de carga de upload
runIt.postNuevo = function(req, res){
    //se chequea si hay archivos por requerir
    if (!req.files.sampleFile)
        return res.status(400).send('Error de subida');
    
    //si existen se pasa a buscar el servicio de logico de subida
    let pantallaDeCarga = servicio.uploadPost(req);
    res.render('doneUpload', {pantallaDeCarga});
};

//lo siguiente es la llamada a la pantalla de muro de fotos
runIt.postWall = function(req, res){
    let postsList = servicio.allPosts();
    res.render('muro',{postsList});
}


module.exports=runIt;