const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor({name, area} = {}) {
    this.name = name;
    this.location = area || 'Winterfell';
    this.safe = false;
  }

  sayHouseWords() {
    if (!this.safe) {
      return "Winter is Coming";
    } else {
      return "The North Remembers";
    }
  }

  callDirewolf(name, home) {
    var direwolf = new Direwolf(name, home);
    direwolf.home = this.location;
    direwolf.protect(this);
    return direwolf;


  }
}

module.exports = Stark;
