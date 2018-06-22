var express = require('express');

var router = express.Router();

posteos = []

//GET
router.get('/', function(req, res, next) {

  res.render('upload');
});

//POST
router.post('/', function(req, res) {

    console.log(req.files)
    let sampleFile = req.files.sampleFile;
    let comentario = req.body.comment;
  
    console.log(sampleFile);
    console.log(req.body);
  
    var fileName = req.files.sampleFile.name;

   
    sampleFile.mv('./public/images/' + fileName, function(err) {
      
      if (err)
        return res.status(500).send(err);
   
      res.render('doneUpload');
    });
  
  });

module.exports = router;