function initMap(){
//---------->Creacion de nuestro mapa 
    var coord = {lat:22.7684307 , lng:-102.5814133 };
    var mapa = new google.maps.Map(document.getElementById('map'),{
        center: coord,
        zoom: 14
    });
//----------->Creacion de botones de segmentacion
    document.getElementById("limp").onclick = function(){
        refrescar();
    } 
    document.getElementById("todo").onclick = function(){
        abarrotes();
        tortilla();
        fyv();
        comida();
        peluqueria();
    } 
    document.getElementById("abarrotes").onclick = function(){
        abarrotes();
    } 
    document.getElementById("tortilleria").onclick = function(){
        tortilla();
    } 
    document.getElementById("fyv").onclick = function(){
        fyv();
    } 
    document.getElementById("comida").onclick = function(){
        comida();
    } 
    document.getElementById("peluqueria").onclick = function(){
        peluqueria();
    } 
//------------>Funcion para refrescar la pagina
    function refrescar(){
        location.reload();
    }
    
    
//------------>Funcion de Abarrotes
    function abarrotes(){
       /* var texto1 = '<h1>'+Abarrotes.nombre +'</h1><p>Tienda de abarrotes<br>8:00am-6:30pm</p>' + '<a href="./pedido.html">Poceder al pedido</a>';
        const marcador = new google.maps.Marker({
            position:coord,
            map:mapa,
            title:"Mi marcador"
        });
        var informacion = new google.maps.InfoWindow({
            content: texto1
        });
        marcador.addListener('click',function(){//Indicacion para que se ejecute cuando presionen click en el marcador
            informacion.open(mapa,marcador);
        });  */
        //-------------------------------------------------------
  
    }   
//------------>Funcion de Tortilleria
    function tortilla(){
   /*     var texto2 = '<h2>'+catedral.nombre +'</h2><p>Tienda de abarrotes<br>8:00am-6:30pm</p>' + '<a href="https://api.whatsapp.com/send?phone='+catedral.numero+'&text=Hola,%20voy%20a%20realizar%20un%20pedido...">Poceder al pedido</a>';
        const marcador2 = new google.maps.Marker({
            position:catedral.coord,
            map:mapa,
            title:"Catedral"
        });
        var informacion2 = new google.maps.InfoWindow({
            content: texto2
        });
        marcador2.addListener('click',function(){//Indicacion para que se ejecute cuando presionen click en el marcador
            informacion2.open(mapa,marcador2);
        });*/
    }   
//------------>Funcion de Frutas y Verduras
    function fyv(){
        
    }   
//------------>Funcion de Comida
    function comida(){
        
    }   
//------------>Funcion de Peluqueria
    function peluqueria(){
        
    }   
}


//----------->Objetos
var Abarrotes = {
    nombre:"Super Hidraulica",
    Horario:"8:00am-5:30pm",
    concepto:"Tienda de Abarrotes",
    coord:{lat:22.7684307,lng:-102.5814133},
}
var catedral = {
    nombre:"Catedral",
    Horario:"Siempre Abierto",
    concepto:"Templo",
    numero:"4921974220",
    coord:{lat:22.775713,lng:-102.5724074},
}