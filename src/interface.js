$(function () {

	$('#select-city').on ("submit", function(event) {
		event.preventDefault();
		let city = $('#current-city').val();
		displayWeather(city)
	});

	let thermostat = new Thermostat();
	$("#temperature").text(thermostat.temp);	

	function displayWeather(city) {
		let url = "http://api.openweathermap.org/data/2.5/weather?q="
		let appId = "&appid=2e32145359025f11feb76cabef2e20fd"
		let units = "&units=metric"
		$.get(url + city + appId + units, function(data) {
			$('#current-temperature').text(data.main.temp);
		})
	}

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
	})

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
		} else if (thermostat.usage() === "medium-usage"){
			$('#temperature').css('color', 'black'); 
		} else { 
			$('#temperature').css('color', 'red'); 
		}
		$("#temperature").text(thermostat.temp);
	}
	
});

