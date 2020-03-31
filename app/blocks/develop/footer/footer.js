var myMap;
  	ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
  	function init () {
    	myMap = new ymaps.Map("map", {
    		preset: 'twirl#redIcon',
    		Placemark: [43.551605, 39.777347],
      		center: [43.551605, 39.777347], // Координаты центра карты
      		zoom: 17, // Zoom
      		controls: []
    	});
 
	    myMap.behaviors.disable('scrollZoom');
	 
var myPlacemark = new ymaps.Placemark([43.551605, 39.777347] , {},
	{ preset: 'twirl#invertedLightblueClusterIcons' });     
	 
	myMap.geoObjects.add(myPlacemark);
}
