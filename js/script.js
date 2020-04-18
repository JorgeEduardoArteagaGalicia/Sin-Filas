function iniciaMap() {
    var coord = {lat:-102.623638 , lng: -102.5820923   };
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom:10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map:map
    })
}