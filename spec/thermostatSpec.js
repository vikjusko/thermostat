describe('Thermostat', function() {
  
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat(20)
  });
  
  it('it has a starting temp of 20', function() {
    expect(thermostat.showTemp()).toEqual(20)
  });
  it('can increase temperature by a given number', function() {
    expect(thermostat.up(3)).toEqual(23)
  });
  it('can decrease the temperature by a given number', function() {
    expect(thermostat.down(5)).toEqual(15)
  });
});