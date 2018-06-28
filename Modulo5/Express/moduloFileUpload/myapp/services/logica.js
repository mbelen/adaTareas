runIt = {}
array = [];

runIt.uploadPost = function(req, res){

    console.log(req.files)
    let fotoUp = req.files.fotoUp;
    let comentario = req.body.comment;

    console.log(fotoUp);
    console.log(req.body);
    
    var fileName = req.files.fotoUp.name;
    fotoUp.mv('./public/images/' + fileName, function(err) {});

    newPost = {
        id:postName.split(".").shift(),
        name:postName,
        fav:0,
        comment:comentario,
    }

    array.unshift(newPost);
    return array;

}

runIt.allPost = function(){
    return array;
}

module.exports=runIt;