/*Work with a partner to create a monkey object, which has the following properties:
* name  (string)
* species (string)
* foodsEaten (array)
And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.
Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.
Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).
*/

function Monkey(name, species) {
  this.name       = name;
  this.species    = species;
  this.foodsEaten = [];
  this.eatSomething = function(food) {
    this.foodsEaten.push(food);
  }
  this.introduce = function() {
    console.log("Hi, my name is "+ this.name +". I am an "+ this.species + ". I ate "+ this.foodsEaten.join(", ") + ".");
  }
}

var monkey1 = new Monkey("Albie", "chimpanzee");
monkey1.eatSomething("banana");
monkey1.eatSomething("leaves");
monkey1.introduce();
