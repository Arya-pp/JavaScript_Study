let people = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 16 },
  { name: "Charlie", age: 25 }
];

people
  .filter(person => person.age > 18)
  .forEach(person => console.log(person.name));

let totalAge = people.reduce((sum, person) => sum + person.age, 0);
console.log("Total age :" + totalAge);
