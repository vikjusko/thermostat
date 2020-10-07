'use strict';

class Thermostat {
  constructor() {
   this.temp = 20; 
   this.minTemp = 10;
   this.maxTemp_ps_On = 25;
   this.maxTemp_ps_Off = 32;
   this.powerSave = true;
  }

  showTemp() {
    return this.temp;
  }
  up(num) {
    this.temp += num;
    if (this.powerSave === true  && this.temp + num > this.maxTemp_ps_On) {
        return "Cannot go above maximum"
      }  else if  (this.powerSave === false && this.temp + num > this.maxTemp_ps_Off) {
        return 'Cannot go above maximum'
      }
    }
  

  down(num) {
    this.temp -= num;
    if ((this.temp - num) < this.minTemp) {
      return "Cannot go below minimum"
    } 
  }

  isOn() {
    return this.powerSave === true;
  }

  switchOff() {
    this.powerSave = false;
  }

  maximumTemp() {
    if (this.isOn() === false) {
    return this.temp === this.maxTemp_ps_Off;
    }
    return this.temp === this.maxTemp_ps_On;
  }
 
  reset() {
    this.temp = 20;
  }

  usage() {
    if (this.temp <= 18) {
    return "low-usage"; 
    }
    else if (this.temp <= 25) {
      return "medium-usage";
    }
    else {
      return "high-usage";
    }
  }

}

