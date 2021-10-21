class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.disposition = 'Good natured';
    this.humanWards = [];
    this.calmnessMeter = 0;
    this.clothes = {
      dresses: ['Iris'],
    };
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(dresses) {
    this.clothes.dresses.push(...dresses);
  }

  becomeProvoked() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      this.humanWards.push(infant);
      infant.disposition = 'Malicious';
      this.calmnessMeter++;
      if(this.calmnessMeter >= 3) {
        this.disposition = 'Good natured';
        this.calmnessMeter = 0;
      }
      return infant;
    } else {
      return infant;
    }
  }
}

module.exports = Fairy;
