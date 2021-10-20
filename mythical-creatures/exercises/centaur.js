class Centaur {
  constructor({name: name, type: breed}) {
    this.name = name;
    this.breed = breed;
    this.actions = 0;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
  }

  shootBow() {
    if (this.layingDown === true) {
      return 'NO!';
    }
    this.actions += 1;
    if (this.actions < 3) {
      this.cranky = false;
      return 'Twang!!!';
    } else if (this.actions >= 3) {
      this.cranky = true;
      return 'NO!';
    }
  }

  drinkPotion() {
    if (this.standing === true) {
      this.cranky = false;
    } else {
      return 'Not while I\'m laying down!';
    }
  }

  run() {
    if (this.layingDown === true) {
      return 'NO!';
    }
    this.actions += 1;
    if (this.actions < 3) {
      this.cranky = false;
      return 'Clop clop clop clop!!!';
    } else if (this.actions >= 3) {
      this.cranky = true;
      return 'NO!';
    }
  }

  sleep() {
    if (this.standing === true) {
      return 'NO!';
    } else {
      this.actions = 0;
      this.cranky = false;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
}

module.exports = Centaur;
