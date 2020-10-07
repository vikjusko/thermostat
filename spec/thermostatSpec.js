'use strict';

describe('Thermostat', function() {
  
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat(20)
  });
  
  it('it has a starting temp of 20', function() {
    expect(thermostat.showTemp()).toEqual(20)
  });
  it('can increase temperature by a given number', function() {
    thermostat.up(3)
    expect(thermostat.temp).toEqual(23)
  });
  it('can decrease the temperature by a given number', function() {
    thermostat.down(5)
    expect(thermostat.temp).toEqual(15)
  });

  it('has a minimum temperature of 10', function(){
      expect(thermostat.minTemp).toEqual(10)
  });
  it('cannot go below min temp', function(){
    thermostat.down(11)
    expect(thermostat.temp).toEqual(10)
  });
  it('has a max temp of 25', function() {
    thermostat.up(5)
    expect(thermostat.showTemp()).toEqual(25)
  });
  it('cannot go above maximum with powersave on ', function() {
    thermostat.up(20)
    expect(thermostat.temp).toEqual(25)
  });
  // added this test to test that with powersave off I could go above limit of 25 
  it('cannot go above max with powersave off', function(){
    thermostat.switchMode();
    thermostat.up(10);
    expect(thermostat.showTemp()).toEqual(30)
  });
  it('powersave = false', function() {
    expect(thermostat.isOn()).toBe(true)
  });
  it('can turn on powersave', function() {
    thermostat.switchMode()
    expect(thermostat.isOn()).toBe(false)
  });


  it("can increase temperature up to 32 when powersave is off", function(){
    thermostat.switchMode();
    thermostat.up(12); 
    expect(thermostat.temp).toEqual(32)
  });
  
  it("has a function reset that changes the temperature to 20 degrees", function(){
    thermostat.up(5)
    thermostat.reset()
    expect(thermostat.temp).toEqual(20)
  });

  it("gives us information about the current usage", function(){
    expect(thermostat.usage()).toEqual("medium-usage")
  });

  it(" confirms low usage when the temperature is below 18", function(){
    thermostat.down(4)
    expect(thermostat.usage()).toEqual("low-usage")
  });
  it("tells you that you are wasting energy when it is more than 25 degrees", function(){
    thermostat.switchMode()
    thermostat.up(8)
    expect(thermostat.usage()).toEqual("high-usage")
  });

});