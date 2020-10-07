$(document).jQuery(function () {
  var thermostat = new Thermostat();
  $("#temperature").text(thermostat.temp);
});
$("#up").on("click", function () {
  thermostat.up();
  $("#temperature").text(thermostat.temp); 
});