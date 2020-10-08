$(function() {

$('#choose-city').on('submit', function(event) {
  event.preventDefault();
  var city = $('#chosen-city').val();
  displayWeather(city);
});

  var thermostat = new Thermostat();
  /*$("#temperature").text(thermostat.temp);*/
$.get('http://localhost:9292/', function(data) {
	 $("#temperature").text(data.temp); 
	})

$("#up").on("click", function() {
	thermostat.up();
	showTemp(); 
});

$("#down").on("click", function() {
  thermostat.down();
  $("#temperature").text(showTemp()); 
});

$('#reset').on("click", function() {
  thermostat.reset();
  $("#temperature").text(showTemp());
});

$('#on').on("click", function() {
	thermostat.switchOn();
  $("#powersaving").css("color", "green");
});

$("#off").on("click", function () {
  thermostat.switchOff();
  $("#powersaving").css("color", "red");
});


	function showTemp(){
		if( thermostat.usage() === "low-usage") {
			$('#temperature').css('color', 'green');
		}else if (thermostat.usage() === "medium-usage"){
			$('#temperature').css('color', 'black'); 
		} else { 
			$('#temperature').css('color', 'red'); 
		}
		 $("#temperature").text(thermostat.temp);
	}

function displayWeather(city) {
 var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
 var token = '&appid=2e32145359025f11feb76cabef2e20fd';
 var units = '&units=metric';
 $.get(url + token + units, function(data) {
	 $("#c-temperature").text(data.main.temp); 
	})
}	

});
