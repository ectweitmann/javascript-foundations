class Ogre {
  constructor({name: name, abode: home} = {}) {
    this.name = name;
    this.swings = 0;

    if (!home) {
      this.home = 'Swamp';
    } else {
    this.home = home;
    }
  }

  encounter(human) {
    human.encounterCounter++;
    if (human.noticesOgre() && this.swings === 1) {
      this.swings++;
      human.knockedOut = true;
    } else if (human.noticesOgre()) {
      this.swings++;
    }
  }

  swingAt(human) {
    this.swings++;
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;
