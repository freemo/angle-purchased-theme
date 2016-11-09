
(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('GMapController', GMapController);

    GMapController.$inject = ['$timeout'];
    function GMapController($timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          var position = [
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.787453, -117.835858)
            ];
          
          vm.addMarker = addMarker;
          // we use timeout to wait maps to be ready before add a markers
          $timeout(function(){
            addMarker(vm.myMap1, position[0]);
            addMarker(vm.myMap2, position[1]);
            addMarker(vm.myMap3, position[2]);
            addMarker(vm.myMap5, position[3]);
          });

          vm.mapOptions1 = {
            zoom: 14,
            center: position[0],
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
          };

          vm.mapOptions2 = {
            zoom: 19,
            center: position[1],
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

          vm.mapOptions3 = {
            zoom: 14,
            center: position[2],
            mapTypeId: google.maps.MapTypeId.SATELLITE
          };

          vm.mapOptions4 = {
            zoom: 14,
            center: position[3],
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

          // for multiple markers
          $timeout(function(){
            addMarker(vm.myMap4, position[3]);
            addMarker(vm.myMap4, position[4]);
          });

          // custom map style
          var MapStyles = [{'featureType':'water','stylers':[{'visibility':'on'},{'color':'#bdd1f9'}]},{'featureType':'all','elementType':'labels.text.fill','stylers':[{'color':'#334165'}]},{featureType:'landscape',stylers:[{color:'#e9ebf1'}]},{featureType:'road.highway',elementType:'geometry',stylers:[{color:'#c5c6c6'}]},{featureType:'road.arterial',elementType:'geometry',stylers:[{color:'#fff'}]},{featureType:'road.local',elementType:'geometry',stylers:[{color:'#fff'}]},{featureType:'transit',elementType:'geometry',stylers:[{color:'#d8dbe0'}]},{featureType:'poi',elementType:'geometry',stylers:[{color:'#cfd5e0'}]},{featureType:'administrative',stylers:[{visibility:'on'},{lightness:33}]},{featureType:'poi.park',elementType:'labels',stylers:[{visibility:'on'},{lightness:20}]},{featureType:'road',stylers:[{color:'#d8dbe0',lightness:20}]}];
          vm.mapOptions5 = {
            zoom: 14,
            center: position[3],
            styles: MapStyles,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
          };

          ///////////////
          
          function addMarker(map, position) {
            return new google.maps.Marker({
              map: map,
              position: position
            });
          }

        }
    }
})();
