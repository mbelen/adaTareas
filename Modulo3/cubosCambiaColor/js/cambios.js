document.getElementById("sector1").onclick = function() {cambioColor()};

function cambioColor() {
if (document.getElementById("sector1").style.backgroundColor === 'red') {
    document.getElementById("sector1").style.backgroundColor = 'green';
    } else {
    document.getElementById("sector1").style.backgroundColor = 'red';
    }
}

document.getElementById("peces").onclick = function() {switchColor()};

function switchColor(){
	if (document.getElementsByClassName("pez1").style.backgroundColor === 'green' || document.getElementsByClassName("pez2").style.backgroundColor === 'yellow' ){
		document.getElementsByClassName("pez1").style.backgroundColor = 'yellow';
		document.getElementsByClassName("pez2").style.backgroundColor = 'green';
	}else{
		document.getElementsByClassName("pez1").style.backgroundColor = 'green';
		document.getElementsByClassName("pez2").style.backgroundColor = 'yellow';
	}
}