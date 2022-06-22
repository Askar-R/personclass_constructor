class Person {
  age;
  name;
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, I'm ${this.age} years old.`);
  }
}
const xyz = new Person(31, "Razan");
xyz.introduceSelf();
