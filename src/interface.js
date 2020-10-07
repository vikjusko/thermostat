$(document).ready(function () {
  var thermostat = new Thermostat();
  $("#temperature").text(thermostat.temp);


$("#up").on("click", function() {
  thermostat.up();
  $("#temperature").text(thermostat.temp); 
});

$("#down").on("click", function() {
  thermostat.down();
  $("#temperature").text(thermostat.temp); 
});

$('#reset').on("click", function() {
  thermostat.reset();
  $("#temperature").text(thermostat.temp);
})

$('#mode').on("click", function() {
  thermostat.switchMode();
  $("#modedisplay").text(thermostat.powerSave)
})

});