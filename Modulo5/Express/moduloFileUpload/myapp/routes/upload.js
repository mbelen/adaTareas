var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  res.render('upload');
});

router.post('/', function(req, res) {
    // if (!req.files)
    //   return res.status(400).send('No files were uploaded.');
    console.log(req.files)
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
  
    console.log(sampleFile);
  
    var fileName = req.files.sampleFile.name;
   
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('./public/images/' + fileName, function(err) {
      
      if (err)
        
        return res.status(500).send(err);
   
      res.send('File uploaded!');
    });
  
  });

module.exports = router;