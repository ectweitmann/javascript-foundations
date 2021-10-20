class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;

    if (size === undefined) {
      this.size = "Massive";
    } else {
      this.size = size;
    }

    if (home === undefined) {
      this.home = "Beyond the Wall";
    } else {
      this.home = home;
    }
  }

  protect(stark) {
    if (stark.location === this.home && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      stark.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }

  leave(stark) {
    this.starksToProtect.shift(stark);
    stark.safe = false;
  }
}


module.exports = Direwolf;
