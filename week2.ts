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

/* 
Task 2 - Define a city object and use an interface to define the object structure.
The city object should have the following properties
- name
- population
- country

The city object should be assigned to the cityObject variable.

The city object should describe Helsinki, Finland with population of 600000.
*/

let cityObject = null; // Assign your city object to cityObject variable.

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
  /* Write your solution here */
}

let animal1 = null; // initialize the animal1
let animal2 = null; // initialize the animal2

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
  /* Write your solution here */
}

let snake = null; // Initialize the snake
let lion = null; // Initialize the lion

export { GreeterFunction, cityObject, animal1, animal2, snake, lion };


// Task 5: Define an array of city objects with at least three elements or more, by using the interface you made in Task 2., as every city object 
// should have the following properties:
// - name
// - population
// - country
//
// initialize this array of city objects with certain initial values defined by yourself. 
// Then create a function which returns an string array of the city names. 
// Create a function which converts the city names to uppercases. 
// Create a function which gets the city with lowest population count. 
export const cities: City[] = /* Write your solution here */

export function getCityNames(cities: City[]): string[] {
   /* Write your solution here */
}

export function getCityNamesInUpperCase(cities: City[]): string[] {
   /* Write your solution here */
}

export function getCityWithLowestPopulation(cities: City[]): City {
  /* Write your solution here */
}


// Task 6: methods to get the current balance and methods to increase or decrease balance. Account should also keep log of increase / decrease balance events.
// Account should have a function to print the log.

// Step 1: Create a class named BankAccount to describe a bank account.
// the class should have the following properties:
// - owner ( the owner name should be initialized with the parameter of the constructor)
// - id (the id should be initialized with the parameter of the constructor)
// - balance (initialize it to 0 inside the constructor)
// - log (array of strings to keep track of balance changes, initialize it with empty string array in the constructor) 
export class BankAccount  {

   /*Step 1 : Write your solution here */

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

  // Step 2. write a method to get the current balance
  getBalance(): number {
     /* Write your solution here */
  }

  // Step 3. write a method to increase the balance. Inside this method, the method getTimestamp should be used to get the current timestamp.
  // As a result, the string `${timestamp} : +${amount}`(quoted with single quote) should be added to the log.
  increaseBalance(amount: number): void {
     /* Write your solution here */
  }

  // Step 4. write a method to decrease the balance. Inside this method, the method getTimestamp should be used to get the current timestamp.
  // As a result, the string `${timestamp} : -${amount}`(quoted with single quote) should be added to the log.
  decreaseBalance(amount: number): void {
     /* Write your solution here */
  }

  // print the log
  printLog(): void {
    console.log(this.log.join("\n"));
  }
}


