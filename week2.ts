/*
  ALL TASKS MUST BE IMPLEMENTED WITH TYPESCRIPT!
  Use interfaces and data types in all cases to explicitly specify the types
  for variables, function parameters, function return values and object structures. 
*/

/*
Task 1 - Greeter function
Create a function with the name GreeterFunction that takes a string as a parameter and returns a string that says "Hello, " + the parameter.
*/
/* Write your Task 1 solution here */
function GreeterFunction(name: string): string {
  return "Hello, " + name;
}

/* 
Task 2 - Define a city object and use an interface to define the object structure.
The city object should have the following properties
- name
- population
- country

The city object should be assigned to the cityObject variable.

The city object should describe Helsinki, Finland with population of 600000.
*/

interface City {
  name: string;
  population: number;
  country: string;
}

let cityObject: City = {
  name: "Helsinki",
  population: 600000,
  country: "Finland",
};

/*
Task 3 - Create a class to describe an animal.
The animal class should have the following properties:
- name, such as "Cat", "Snake" etc.
- age in years

Then create two new animal objects, which should be assigned to animal1 and animal2 variables.
animal1 should have name "Cat" and age 2
animal2 should have name "Dog" and age 3
*/
class Animal {
  constructor(public name: string, public age: number) {}
}

let animal1 = new Animal("Cat", 2);
let animal2 = new Animal("Dog", 3);





/* Task 4 - Improve your solution for Task 3 so that the Animal
  class has a method called "makeSound". This improved solution should be implemented 
  in a class named Animal2. 

  The method should return a string in the following format "I am a <name> and I sound like <sound>".
  Where <name> is the name of the animal and <sound> is the sound the animal makes.
  The sound should be defined when the animal object is created.

  Use your Animal2 class to create two animal objects. You should create:
  - snake, which makes a sound "hiss", age is 4
  - lion, which makes a sound "roar", age is 8

  The animal objects should be assigned to snake and lion variables respectively.
*/

class Animal2 {
  constructor(public name: string, public age: number, public sound: string) {}

  makeSound(): string {
    return `I am a ${this.name} and I sound like ${this.sound}`;
  }
}

let snake = new Animal2("Snake", 4, "hiss");
let lion = new Animal2("Lion", 8, "roar");

export { GreeterFunction, cityObject, animal1, animal2, snake, lion };



export const cities: City[] = [
  { name: 'London', population: 8900000,  country: 'UK' },
  { name: 'Berlin', population: 3700000, country: 'Germany' },
  { name: 'New York', population: 8500000, country: 'USA' }
];

export function getCityNames(cities: City[]): string[] {
  return cities.map(city => city.name);
}

export function getCityNamesInUpperCase(cities: City[]): string[] {
  return cities.map(city => city.name.toUpperCase());
}

export function getCityWithLowestPopulation(cities: City[]): City {
  return cities.reduce((prev, curr) => (prev.population < curr.population ? prev : curr));
}


export class BankAccount  {
  owner: string;
  id: string;
  balance: number;
  log: string[];

  constructor(owner: string, id: string) {
    this.owner = owner;
    this.id = id;
    this.balance = 0;
    this.log = [];
  }

  getTimestamp(): string {
    return new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }

  getBalance(): number {
    return this.balance;
  }

  increaseBalance(amount: number): void {
    this.balance += amount;
    const timestamp = this.getTimestamp();
    this.log.push(`${timestamp} : +${amount}`);
  }

  decreaseBalance(amount: number): void {
    this.balance -= amount;
    const timestamp = this.getTimestamp();
    this.log.push(`${timestamp} : -${amount}`);
  }

  printLog(): void {
    console.log(this.log.join("\n"));
  }
}


