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
  up(num=1) {
    this.temp += num;
    if ((this.powerSave === true)  && (this.temp  > this.maxTemp_ps_On)) {
        this.temp = this.maxTemp_ps_On;
      }  else if  ((this.powerSave === false) && (this.temp > this.maxTemp_ps_Off)) {
        this.temp = this.maxTemp_ps_Off;
      }
    }
  

  down(num=1) {
    this.temp -= num;
    if (this.temp < this.minTemp) {
      this.temp = this.minTemp;
    } 
  }


  switchOn(){
    this.powerSave = true;
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

