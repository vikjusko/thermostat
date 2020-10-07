'use strict';

class Thermostat {
  constructor(temp) {
   this.temp = temp; 
   this.minTemp = 10;
   this.maxTemp_ps_On = 25;
   this.maxTemp_ps_Off = 32;
   this.powerSave = true;
  }

  showTemp() {
    return this.temp;
  }
  up(num) {
    //this is a bit of a mess but will try and refactor to simplify 
    if (this.powerSave) {
      if ((this.temp + num) > this.maxTemp_ps_On) {
        return "Cannot go above maximum"
      } else {
      return this.temp += num 
      }
    } else {
      if ((this.temp + num) > this.maxTemp_ps_Off) {
        return 'Cannot go above maximum'
      } else {
      return this.temp += num;
      }
    }
  }
  //   if ((this.temp + num) > this.maxTemp) {
  //     return "Cannot go above maximum"
  //   }
  //   return this.temp += num;
  // }
  down(num) {
    if ((this.temp - num) < this.minTemp) {
      return "Cannot go below minimum"
    } 
    return this.temp -= num;
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
 
}

