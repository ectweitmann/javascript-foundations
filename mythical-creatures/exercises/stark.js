const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor({name: name, area: location} = {}) {
    this.name = name;
    this.safe = false;

    if (location === undefined) {
      this.location = "Winterfell"
    } else {
    this.location = location;
    }
  }

  sayHouseWords() {
    if (this.safe === false) {
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
