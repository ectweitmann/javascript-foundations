class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.hungry = true;
    this.mealCounter = 1;
    this.rider = rider;
  }
  greet() {
    return `Hi, ${this.rider}!`;
  }
  eat() {
    if (this.mealCounter < 3) {
      this.hungry = true;
      this.mealCounter += 1;
    } else {
      this.hungry = false;
    }
  }

}



module.exports = Dragon;
