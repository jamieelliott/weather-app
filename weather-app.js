
// 0a81b7f68cc55325
// http://api.wunderground.com/api/0a81b7f68cc55325/conditions/q/CA/San_Francisco.json



var weatherWidget = {
};
// storing our url
weatherWidget.apiUrl = "http://api.wunderground.com/api/0a81b7f68cc55325/conditions/q/CA/San_Francisco.json";
// this is calling the method getData, it just needs to get the data
weatherWidget.init = function(){
	weatherWidget.getData();
};
weatherWidget.getData = function(){
	// this is how we make an ajax request
	$.ajax({
		// going to the url
		url: weatherWidget.apiUrl,
		// get request to GET data
		method: 'GET',
		// need to type json
		dataType : "json"
	})
	// make a call to a call back function
	// calling a predefined thing display.weather
	.then(function(weatherData) {
		// console.log(weatherData.current_observation);
		var observation = weatherData.current_observation;
		weatherWidget.displayWeather(observation);
	});
};


weatherWidget.displayWeather = function(weather){
	console.log(weather);
	var city = weather.display_location.city;
	$('.city_name').text(city);

	var temp_c = weather.temp_c;
	// console.log(temp_c);
	$('.temp_c').text(temp_c);

	var time = weather.local_time_rfc822;
	$('.date_time').text(time);

	var condition = weather.weather;
	$('.weather_string').text(condition);

	var image = weather.icon_url;
	$('.weather_image').attr('src',image);
};
//when the page loads we need to get some data
//make an ajax call to the wunder ground API
// when the data returns we want to display specific things
// console.log it to see what information comes back

$(document).ready(function(){
  weatherWidget.init();
});
