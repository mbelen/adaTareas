/*
Ayuda Memoria=

Syntaxis Basica:
$(selector).action()

$(this).action -- es cuando ya habias llamado al elemento
 
$(".test").action -- Acá llama a una clase

$("img").css(background:) -- Acá cambia la cara

*/

var flag = true; // este flag controla que no se pueda seleccionar otra carta hasta terminar la animacion

$(document).ready(function(){
    // **** Inicializacion de array y cantidad  de cartas a usar ***
    var mazo = [];
    var cantCartas = 12;
    var intentos = 24;

    
    function ingresoNomb() {
        var person = prompt("Porfavor Ingrese su Nombre:", "Jugador1");
        if (person == null || person == "") {
            ingresoNomb();
        } else {
            $('#nombre').text(person)
        }
    
    }

    ingresoNomb();

    function chancesContador(){
        $('#chancesIntentos').text('Intentos: '+ intentos);
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

    // Desordeno el mazo >_< wiiiiiiiiiiii
    shuffle(mazo);

        for(var i = 0; i<mazo.length; i = i + 1 ){
                $("#board").append(mazo[i]);
            
        }
    
    
    // ***LAs siguientes fuinciones son para descubrir y ocultar las cartas.***
    function mostrarCarta(card){
        $(card).attr('src', 'img/' + $(card).data('id') +'.png');        
    }

    function ocultarCarta(){
        $(this).attr('src', 'img/dorso.png');                
        $(this).addClass("dorso");
    }

    //*** Aca sucede la magia***
    var dataCompare = null;
        $.fn.checkCardData = function(){        	
            if (dataCompare == null){ // Si es la primera vez
                dataCompare = "#"+$(this).attr('id');
                $(this).removeClass("dorso");                
            }else {	// si dataCompare tiene una id, compraro

	            if($(dataCompare).attr('data-id') == $(this).attr('data-id')){
	                console.log($(this).attr('data-id'));
	                console.log(dataCompare+" entro en el estado 1");//esto es para chequear en la consola si entro bien
	                $(this).removeClass("dorso");	                
	            }else{
	                console.log(dataCompare +" entro en el estado 2");
                    $(dataCompare).fadeTo("slow", 3, ocultarCarta).fadeTo("slow",1);
                    intentos = intentos - 1;
                    console.log("quedan " + intentos);
                    chancesContador();
	                $(this).fadeTo("slow", 3, ocultarCarta).fadeTo("slow",1);	                
	                
	            }
	            dataCompare = null;      
	        }
	        setTimeout(function(){flag = true;}, 500);	
        };  

    //*** al escuchar el click ... ***
        $(".carta").click(function(){
            
            if ($(this).hasClass("dorso") && flag){
                flag= false; 
                $(this).fadeTo("slow", 0.3,function(){ 
                    mostrarCarta(this);
                    $(this).checkCardData();
                }).fadeTo("slow",1);
                    
            }        
        
          
    });

});

