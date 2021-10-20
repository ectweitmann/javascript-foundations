class Pirate {
  constructor(name, job) {
    this.name = name;
    this.cursed = false;
    this.booty = 0;
    this.numOfShipsPlundered = 0;
    if (job === undefined) {
      this.job = "scallywag";
    } else {
      this.job = job;
    }
  }
  robShip() {
    if (this.numOfShipsPlundered === 5) {
      this.cursed = true;
      return 'ARG! I\'ve been cursed!';
    } else {
    this.booty += 100;
    this.numOfShipsPlundered++;
    return 'YAARRR!';
    }
  }
  liftCurse() {
    if (this.cursed === false) {
      return 'You don\'t need to lift a curse!';
    } else if ((this.booty - 300) >= 0 && this.cursed === true) {
      this.booty -= 300;
      this.cursed = false;
      return 'Your curse has been lifted!';
    } else {
      this.cursed = true;
    }
  }
}

module.exports = Pirate;
