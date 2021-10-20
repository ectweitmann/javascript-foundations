class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.thirsty = true;
    this.pet = pet;
    this.ouncesDrank = 0;
    if (this.pet === undefined) {
      this.pet = "bat";
    }
  }
  drink() {
    this.thirsty = false;
    if (this.ouncesDrank < 50) {
      this.ouncesDrank += 10;
    } else {
      return "I'm too full to drink anymore!";
    }
  }

}


module.exports = Vampire;
