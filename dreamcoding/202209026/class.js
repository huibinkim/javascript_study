'use strict';
// class:template
// object : instance of a class

class person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  speak(){
    console.log(`${this.name}:hello`);
  }
}

const ellie = new person('ellie', 20);
console.log(ellie.name);
ellie.speak();
