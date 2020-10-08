$(document).ready(function () {
  var thermostat = new Thermostat();
  $("#temperature").text(thermostat.temp);


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
		}else if (thermostat.usage() === "medium-usage"){
			$('#temperature').css('color', 'black'); 
		} else { 
			$('#temperature').css('color', 'red'); 
		}
		 $("#temperature").text(thermostat.temp);
	}
	
});
