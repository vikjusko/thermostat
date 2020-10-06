describe('Thermostat', function() {
  var thermostat;
  thermostat = new Thermostat 
  it('it has a starting temp of 20', function() {
    expect(thermostat.temp()).toEqual(20)
  });
});