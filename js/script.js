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
        optica();
        papeleria();
        ferreteria();
        ropa(); 
        medica();
        arte();
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
    document.getElementById("optica").onclick = function(){
        optica();
    } 
    document.getElementById("papeleria").onclick = function(){
        papeleria();
    } 
    document.getElementById("ferreteria").onclick = function(){
        ferreteria();
    } 
    document.getElementById("ropa").onclick = function(){
        ropa(); 
    } 
    document.getElementById("salud").onclick = function(){
        medica();
    } 
    document.getElementById("arte").onclick = function(){
        arte();
    } 
//------------>Funcion para refrescar la pagina
    function refrescar(){
        location.reload();
    }
    
    
//------------>Funcion de Abarrotes
    function abarrotes(){
        var tabarrotes1 = '<h2>'+abarotes1.nombre +'</h2><p>'+abarotes1.concepto+'<br>'+abarotes1.horario+'</p>'+'<a href="https://api.whatsapp.com/send?phone=52'+abarotes1.numero+'&text=Hola,%20voy%20a%20realizar%20un%20pedido...">Poceder al pedido</a>';
        const mabarrotes1 = new google.maps.Marker({
            position:abarotes1.coord,
            map:mapa,
            title:abarotes1.nombre
        });
        var iabarrotes1 = new google.maps.InfoWindow({
            content: tabarrotes1
        });
        mabarrotes1.addListener('click',function(){//Indicacion para que se ejecute cuando presionen click en el marcador
            iabarrotes1.open(mapa,mabarrotes1);
        });
  
    }   
//------------>Funcion de Tortilleria
    function tortilla(){

    }   
//------------>Funcion de Frutas y Verduras
    function fyv(){
        
    }   
//------------>Funcion de Comida
    function comida(){
        var tcomida1 = '<h2>'+comida1.nombre +'</h2><p>'+comida1.concepto+'<br>'+comida1.horario+'</p>'+'<a href="https://api.whatsapp.com/send?phone=52'+comida1.numero+'&text=Hola,%20voy%20a%20realizar%20un%20pedido...">Poceder al pedido</a>';
        const mcomida1 = new google.maps.Marker({
            position:comida1.coord,
            map:mapa,
            title:comida1.nombre
        });
        var icomida1 = new google.maps.InfoWindow({
            content: tcomida1
        });
        mcomida1.addListener('click',function(){//Indicacion para que se ejecute cuando presionen click en el marcador
            icomida1.open(mapa,mcomida1);
        });
        
    }   
//------------>Funcion de Peluqueria
    function peluqueria(){
        
    }  
//------------->Funcion de Optica 
    function optica(){
        var toptica1 = '<h2>'+optica1.nombre +'</h2><p>'+optica1.concepto+'<br>'+optica1.horario+'</p>'+'<a href="https://api.whatsapp.com/send?phone=52'+optica1.numero+'&text=Hola,%20voy%20a%20realizar%20un%20pedido...">Poceder al pedido</a>';
        const moptica1 = new google.maps.Marker({
            position:optica1.coord,
            map:mapa,
            title:optica1.nombre
        });
        var ioptica1 = new google.maps.InfoWindow({
            content: toptica1
        });
        moptica1.addListener('click',function(){//Indicacion para que se ejecute cuando presionen click en el marcador
            ioptica1.open(mapa,moptica1);
        });
    }  
//--------------->Funcion de Papeleria
    function papeleria(){
        var tpapeleria1 = '<h2>'+papeleria1.nombre +'</h2><p>'+papeleria1.concepto+'<br>'+papeleria1.horario+'</p>'+'<a href="https://api.whatsapp.com/send?phone=52'+papeleria1.numero+'&text=Hola,%20voy%20a%20realizar%20un%20pedido...">Poceder al pedido</a>';
        const mpapeleria1 = new google.maps.Marker({
            position:papeleria1.coord,
            map:mapa,
            title:papeleria1.nombre
        });
        var ipapeleria1 = new google.maps.InfoWindow({
            content: tpapeleria1
        });
        mpapeleria1.addListener('click',function(){//Indicacion para que se ejecute cuando presionen click en el marcador
            ipapeleria1.open(mapa,mpapeleria1);
        });
    }  
//------------------>Funcion de ferreteria
    function ferreteria(){
        var tferreteria1 = '<h2>'+ferreteria1.nombre +'</h2><p>'+ferreteria1.concepto+'<br>'+ferreteria1.horario+'</p>'+'<a href="https://api.whatsapp.com/send?phone=52'+ferreteria1.numero+'&text=Hola,%20voy%20a%20realizar%20un%20pedido...">Poceder al pedido</a>';
        const mferreteria1 = new google.maps.Marker({
            position:ferreteria1.coord,
            map:mapa,
            title:ferreteria1.nombre
        });
        var iferreteria1 = new google.maps.InfoWindow({
            content: tferreteria1
        });
        mferreteria1.addListener('click',function(){//Indicacion para que se ejecute cuando presionen click en el marcador
            iferreteria1.open(mapa,mferreteria1);
        });
    }

    function ropa(){

        var tropa1 = '<h2>'+ropa1.nombre +'</h2><p>'+ropa1.concepto+'<br>'+ropa1.horario+'</p>'+'<a href="https://api.whatsapp.com/send?phone=52'+ropa1.numero+'&text=Hola,%20voy%20a%20realizar%20un%20pedido...">Poceder al pedido</a>';
        const mropa1 = new google.maps.Marker({
            position:ropa1.coord,
            map:mapa,
            title:ropa1.nombre
        });
        var iropa1 = new google.maps.InfoWindow({
            content: tropa1
        });
        mropa1.addListener('click',function(){//Indicacion para que se ejecute cuando presionen click en el marcador
            iropa1.open(mapa,mropa1);
        });

        //----------
        var tropa2 = '<h2>'+ropa2.nombre +'</h2><p>'+ropa2.concepto+'<br>'+ropa2.horario+'</p>'+'<a href="https://api.whatsapp.com/send?phone=52'+ropa2.numero+'&text=Hola,%20voy%20a%20realizar%20un%20pedido...">Poceder al pedido</a>';
        const mropa2 = new google.maps.Marker({
            position:ropa2.coord,
            map:mapa,
            title:ropa2.nombre
        });
        var iropa2 = new google.maps.InfoWindow({
            content: tropa2
        });
        mropa2.addListener('click',function(){//Indicacion para que se ejecute cuando presionen click en el marcador
            iropa2.open(mapa,mropa2);
        });
        //----------------------------------------
        var tropa3 = '<h2>'+ropa3.nombre +'</h2><p>'+ropa3.concepto+'<br>'+ropa3.horario+'</p>'+'<a href="https://api.whatsapp.com/send?phone=52'+ropa3.numero+'&text=Hola,%20voy%20a%20realizar%20un%20pedido...">Poceder al pedido</a>';
        const mropa3 = new google.maps.Marker({
            position:ropa3.coord,
            map:mapa,
            title:ropa3.nombre
        });
        var iropa3 = new google.maps.InfoWindow({
            content: tropa3
        });
        mropa3.addListener('click',function(){//Indicacion para que se ejecute cuando presionen click en el marcador
            iropa3.open(mapa,mropa3);
        });
    }

    function medica(){
        var tmedica1 = '<h2>'+medica1.nombre +'</h2><p>'+medica1.concepto+'<br>'+medica1.horario+'</p>'+'<a href="https://api.whatsapp.com/send?phone=52'+medica1.numero+'&text=Hola,%20voy%20a%20realizar%20un%20pedido...">Poceder al pedido</a>';
        const mmedica1 = new google.maps.Marker({
            position:medica1.coord,
            map:mapa,
            title:medica1.nombre
        });
        var imedica1 = new google.maps.InfoWindow({
            content: tmedica1
        });
        mmedica1.addListener('click',function(){//Indicacion para que se ejecute cuando presionen click en el marcador
            imedica1.open(mapa,mmedica1);
        });
    }

    function arte(){
        var tarte1 = '<h2>'+arte1.nombre +'</h2><p>'+arte1.concepto+'<br>'+arte1.horario+'</p>'+'<a href="https://api.whatsapp.com/send?phone=52'+arte1.numero+'&text=Hola,%20voy%20a%20realizar%20un%20pedido...">Poceder al pedido</a>';
        const marte1 = new google.maps.Marker({
            position:arte1.coord,
            map:mapa,
            title:arte1.nombre
        });
        var iarte1 = new google.maps.InfoWindow({
            content: tarte1
        });
        marte1.addListener('click',function(){//Indicacion para que se ejecute cuando presionen click en el marcador
            iarte1.open(mapa,marte1);
        });
    }

}

//-----------------------------------------------------------
//------------------------->Objetos
//----------------------------------------------------------

var optica1 ={
    nombre:"Optica Roma",
    concepto:"Optica",
    horario:"11:00am-6:30pm",
    numero:"4921596759",
    coord:{lat:22.7695705,lng:-102.5727257}
}
var papeleria1 ={
    nombre:"Enaipesoft",
    concepto:"Ciber y Papeleria",
    horario:"9:00am-8:00pm",
    numero:"4787987669",
    coord:{lat:22.9534553,lng:-102.7114485}
}

var ferreteria1 = {
    nombre:"Casa Vazquez Ferreteria",
    horario:"9:00am-6:00pm",
    concepto:"Ferreteria",
    numero:"4921169549",
    coord:{lat:22.763319,lng:-102.5833307},
}
//------------>
var Ejemplo1 = {
    nombre:"Ejemplo 1",
    horario:"Siempre Abierto",
    concepto:"Ejemplo",
    numero:"4921974220",
    coord:{lat:22.775713,lng:-102.5724074},
}
var abarotes1 ={
    nombre:"Abarrotes Lili",
    horario:"8:00-10pm",
    concepto:"Abarrotes",
    numero:"4928692378",
    coord:{lat:22.761721,lng:-102.5917654},
}
var ropa1 = {
    nombre:"Kosh Boutique",
    horario:"10:00am-8:0pm",
    concepto:"Tienda de ropa",
    numero:"4921249536",
    coord:{lat:22.7706035,lng:-102.5704045},
}

/////////////////////////////////////////////////////////////////////////
var Ejemplo2 = {
    nombre:"Ejemplo 2",
    horario:"Siempre Abierto",
    concepto:"Ejemplo",
    numero:"4921974220",
    coord:{lat:22.775713,lng:-102.5724074},
}

var medica1 = {
    nombre:"Ortopedia RenewLife",
    horario:"9:00am-6:00pm",
    concepto:"Artículos ortopédicos ",
    numero:"4929090413",
    coord:{lat:22.760256,lng:-102.537398},
}

var arte1 = {
    nombre:"Petonets Cor.",
    horario:"10:00am-7:00pm",
    concepto:"Arte, decoración y diseño.",
    numero:"4442019809",
    coord:{lat:22.775713,lng:-102.5724074},
}

var ropa2 = {
    nombre:"ANDRÉ Store",
    horario:"11:00am-9:00pm",
    concepto:"Ropa para dama",
    numero:"4921246200",
    coord:{lat:22.7698502,lng:-102.5729792}, 
}
var comida1 = {
    nombre:"Restaurant 2 de Noviembre",
    horario:"4:00pm-11:00pm",
    concepto:"Tortas ahogadas y tacos",
    numero:"4991027198",
    coord:{lat:22.3477108,lng:-102.8796995}, 
}
ropa3 = {
    nombre:"Cherry",
    horario:"10:00am-8:00pm",
    concepto:"Ropa para mujeres ",
    numero:"4921039790",
    coord:{lat:22.7696337,lng:-102.5695117}, 
}



