runIt = {};

let petLove = [
    {
    mascota:"perro",
    edad:"bebe",
    tamaño:"pequenio",
    imagen:"/images/dog1.jpg",
    favorito:false,
    },
    {
    mascota:"perro",
    edad:"joven",
    tamaño:"grande",
    imagen:"/images/dog2.jpg",
    favorito:false,
    }
];

runIt.petList = function(){
	return petLove
}

module.exports = runIt;

