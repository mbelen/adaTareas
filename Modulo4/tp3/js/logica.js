/*
Ayuda Memoria=

Syntaxis Basica:
$(selector).action()

$(this).action -- es cuando ya habias llamado al elemento
 
$(".test").action -- Acá llama a una clase

$("img").css(background:) -- Acá cambia la cara

*/

var flag = true; // este flag controla que no se pueda seleccionar otra carta hasta terminar la animacion
var arrayDeJugadores = [];

var mazo = [];
    var cantCartas = 12;
    var intentos = 100;
    var win = cantCartas / 2;
    var time = 0;
    var person = "" ;
    
    var datosJugadorActual = {};
    
    var recuperarDatos = null;
    


    function ingresoNomb() {
        person = prompt("Porfavor Ingrese su Nombre:", "Jugador");
        if (person == null || person == "") {
            ingresoNomb();
        } else {
            $('#nombre').text(person);
            console.log(person);
        }
    
    }

 function ingresoDificultad() {
        
        var levelDif = prompt("Ingrese:\n1 para Facil.\n2 para Medio.\n3 para Dificil", "1");
        
        switch (levelDif) {
            case "1" :
                intentos = 18;
                cantCartas = 12;
                break;
            case "2" :
                intentos = 12;
                cantCartas = 12;
                break;
            case "3" :
                intentos = 8;
                cantCartas = 12;
                break;
            default:
                ingresoDificultad();
                break;
        }
    }



//** Contador visual de Intentos/Chances **/
    function chancesContador(){
        $('#chancesIntentos').text('Intentos: '+ intentos);
    }

    //** Timer ** 

    function startTimer(){
        var timer = document.getElementById("timer");
        
        interval = setInterval(function(){
            time++;
            timer.innerHTML = time;
            //console.log(time);
        
        },1000);
      }
      
    function stopTimer(){
        clearInterval(interval);
    }

    // ***Funcion para mesclar las cartas***
    function shuffle(arrayR) {
        var j, x, i;
        for (i = arrayR.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = arrayR[i];
            arrayR[i] = arrayR[j];
            arrayR[j] = x;
        }
        return arrayR;
    }

    // ***Insertar cartas con sus propios ID + atributos y clases genericos**
    for (var i = 0; i < cantCartas; i = i + 1){
        var carta = $("<img></img>").attr("src","img/dorso.png").attr("class", "carta dorso").attr("id", "card"+i);
        mazo.push(carta);
        
    }

    // ***Generacion de data para asignar el valor de la imagen, esto es para la comparacion***
    for(var i = 0; i < cantCartas / 2; i = i + 1){
        mazo[i] = mazo[i].attr("data-id", "codigo" + (i+1));
        mazo[(cantCartas / 2)+i] = mazo[(cantCartas / 2)+i].attr("data-id", "codigo" + (i+1));
    }



    // ***Las siguientes fuinciones son para descubrir y ocultar las cartas.***
    function mostrarCarta(card){
        $(card).attr('src', 'img/' + $(card).data('id') +'.png');        
    }

    function ocultarCarta(){
        $(this).attr('src', 'img/dorso.png');                
        $(this).addClass("dorso");
    }

    // Funcion que termina el juego
    function finJuego(){
        if (intentos == 0){
            alert("Perdiste\nDesea volver a jugar?");
            location.reload();
        }else if(win == 0){
            $('#msjWoL').text("GANASTE");
            stopTimer();
            saveInfo();
            //location.reload();
        }
        
    }


    // ** funcion para guardar informacion
    function saveInfo(){
        datosJugadorActual = {nomb:person, timeScore:time};
        console.log(datosJugadorActual); // muestro el JSON
        
        
        if(recuperarDatos != 'undefined'&& recuperarDatos != null){
            arrayDeJugadores = JSON.parse(recuperarDatos);
            console.log(recuperarDatos); // recuperacion de datos
        }
        
        arrayDeJugadores.push(datosJugadorActual);

        localStorage.setItem('arrayDeJugadores', JSON.stringify(arrayDeJugadores)); // pisando player parseandolo como string
        
        console.log(arrayDeJugadores); // muestro e Array
        
        

    }

    function creaRank(){
        console.log(recuperarDatos);

        arrayDeJugadores = JSON.parse(recuperarDatos);

        console.log(arrayDeJugadores);

        for(var i=0 ; i < arrayDeJugadores.length; i++){
            // var print = `<li> ${localStorage.arrayDeJugadores[i].nomb} ${localStorage.arrayDeJugadores[i].timeScore} </li>`
            var print = `<li>${arrayDeJugadores[i].nomb} ${arrayDeJugadores[i].timeScore} </li>`
            console.log(print);
            $("#ranking").append(print);
        }

    }




    //*** Aca sucede la magia***
    var dataCompare = null;
        $.fn.checkCardData = function(){        	
            
            if (dataCompare == null){ // Si es la primera vez
                dataCompare = "#"+$(this).attr('id');
                $(this).removeClass("dorso");                
            
            }else{	// si dataCompare tiene una id, compraro

	            if($(dataCompare).attr('data-id') == $(this).attr('data-id')){
	                console.log($(this).attr('data-id'));
	                console.log(dataCompare+" entro en el estado 1");//esto es para chequear en la consola si entro bien
            
                    win = win -1;
            
                    console.log(win);
            
                    $(this).removeClass("dorso");
            
                    finJuego();	                
            
                }else{
            
                    console.log(dataCompare +" entro en el estado 2");
            
                    $(dataCompare).fadeTo("slow", 3, ocultarCarta).fadeTo("slow",1);
                    intentos = intentos - 1;
            
                    console.log("quedan " + intentos);
            
                    chancesContador();
            
                    $(this).fadeTo("slow", 3, ocultarCarta).fadeTo("slow",1);
            
                    finJuego();	                
	                
	            }
            
                dataCompare = null;     
	        }
            
            setTimeout(function(){flag = true;}, 500);	
        };  

    


$(document).ready(function(){

	// **** Inicializacion de array y cantidad  de cartas a usar ***
    ingresoNomb();
    ingresoDificultad();
    startTimer();
    // Desordeno el mazo >_< wiiiiiiiiiiii
    shuffle(mazo);
        for(var i = 0; i<mazo.length; i = i + 1 ){
            $("#board").append(mazo[i]);
            
        }
    recuperarDatos = localStorage.getItem('arrayDeJugadores');
    if (recuperarDatos == null){
    	saveInfo();
    	recuperarDatos = localStorage.getItem('arrayDeJugadores');
    }
    
    creaRank();

    //*** al escuchar el click ... ***
        $(".carta").click(function()
        {
            if ($(this).hasClass("dorso") && flag)
            {
                flag= false; 
                $(this).fadeTo("slow", 0.3,function()
                { 
                    mostrarCarta(this);
                    $(this).checkCardData();
                }).fadeTo("slow",1);
                    
            }        

        });
});

