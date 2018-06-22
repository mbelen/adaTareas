var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  res.render('upload');
});

router.post('/', function(req, res) {

    console.log(req.files)
    let sampleFile = req.files.sampleFile;
  
    console.log(sampleFile);
  
    var fileName = req.files.sampleFile.name;
   
    sampleFile.mv('./public/images/' + fileName, function(err) {
      
      if (err)
        return res.status(500).send(err);
   
      res.send('File uploaded!');
    });
  
  });

module.exports = router;