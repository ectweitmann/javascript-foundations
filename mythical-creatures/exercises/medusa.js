var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(Person) {
    if (this.statues.length < 3) {
      var newStatue = new Statue(Person.name);
      this.statues.push(newStatue);
    } else if (this.statues.length = 3) {
      var newStatue = new Statue(Person.name);
      this.statues.push(newStatue);
      var freePerson = Object.assign(Person, this.statues[0]);
      freePerson.mood = "relieved";
      this.statues.shift();
      return freePerson;
    }
  }
}


module.exports = Medusa;
