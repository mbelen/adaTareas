document.getElementById("sector1").onclick = function() {cambioColor()};

function cambioColor() {
if (document.getElementById("sector1").style.backgroundColor === 'red') {
    document.getElementById("sector1").style.backgroundColor = 'green';
    } else {
    document.getElementById("sector1").style.backgroundColor = 'red';
    }
}

document.getElementsByClassName("peces").onclick = function() {switchColor()};

function switchColor(){
	if (document.getElementById("pez1").style.backgroundColor === 'green' && document.getElementById("pez2").style.backgroundColor === 'yellow' ) {
		document.getElementById("pez1").style.backgroundColor = 'yellow';
		document.getElementById("pez2").style.backgroundColor = 'green';
	}else{
		document.getElementById("pez1").style.backgroundColor = 'green';
		document.getElementById("pez2").style.backgroundColor = 'yellow';
	}
}

