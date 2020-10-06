class Thermostat {
  constructor(temp) {
   this.temp = temp; 
   this.minTemp = 10;
  }
  showTemp() {
    return this.temp;
  }
  up(num) {
    return this.temp += num;
  }
  down(num) {
    if ((this.temp - num) < this.minTemp) {
      return "Cannot go below minimum"
    } 
    return this.temp -= num;
  }
}

//if this.temp - num < this.minTemp raise error 