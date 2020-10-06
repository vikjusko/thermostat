class Thermostat {
  constructor(temp) {
   this.temp = temp; 
  }
  showTemp() {
    return this.temp;
  }
  up(num) {
    return this.temp += num;
  }
  down(num) {
    return this.temp -= num;
  }
}

