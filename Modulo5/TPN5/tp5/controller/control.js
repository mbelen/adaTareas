runIt = {}

runIt.renIndex = function(req, res, next) {
    res.render('index', { title: 'PetLove' });
}

runIt.keepData = function(req, res){
    res.send('consultando...')

    // var raza = req.body.mascota;
    // var tamanio = req.body.tamanio;
    // var edad = req.body.edad;

    console.log(req.body);
}

module.exports = runIt;