<script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDid9fc7bPhOZ8G75-u6anoQ-Ge1Wqu03g&sensor=false&extension=.js'></script>
<script>
    google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var lat = '54.6772642';
        var lng = '25.2672136';
        var mapOptions = {
            center: new google.maps.LatLng(lat,lng),
            zoom: 15,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: true,
            panControl: true,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        }
        var mapElement = document.getElementById('map_conteiner');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
            ['Corner Hotel', 'undefined', 'undefined', 'undefined', 'undefined', lat, lng, 'https://mapbuildr.com/assets/img/markers/solid-pin-red.png']
        ];
        for (i = 0; i < locations.length; i++) {
            if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
            if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
            if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
            if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
            if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
            link = '';     }

    }
</script>
<style>
    #map_conteiner {
        height:700px;
        /*width:550px;*/
    }
    .gm-style-iw * {
        display: block;
        width: 100%;
    }
    .gm-style-iw h4, .gm-style-iw p {
        margin: 0;
        padding: 0;
    }
    .gm-style-iw a {
        color: #4272db;
    }
</style>