// @ts-nocheck
import {
  GreeterFunction,
  cityObject,
  animal1,
  animal2,
  lion,
  snake,
} from "./week2";

// Test for GreeterFunction
describe("GreeterFunction tests", () => {
  it("should return a string Hello, John", () => {
    expect(GreeterFunction("John")).toEqual("Hello, John");
  });
  it("should return a string Hello, Daisy", () => {
    expect(GreeterFunction("Daisy")).toEqual("Hello, Daisy");
  });
  it("should return a string Hello, Bob", () => {
    expect(GreeterFunction("Bob")).toEqual("Hello, Bob");
  });
});

// Test for cityObject structure
describe("cityObject tests", () => {
  it("should have a name property", () => {
    expect(cityObject.name).toBeDefined();
  });
  it("should have a population property", () => {
    expect(cityObject.population).toBeDefined();
  });
  it("should have a country property", () => {
    expect(cityObject.country).toBeDefined();
  });
  it("should have a name property with value Helsinki", () => {
    expect(cityObject.name).toEqual("Helsinki");
  });
  it("should have a population property with value 600000", () => {
    expect(cityObject.population).toEqual(600000);
  });
  it("should have a country property with value Finland", () => {
    expect(cityObject.country).toEqual("Finland");
  });
});

// Test for animal1 and animal2
describe("animal1 and animal2 tests", () => {
  it("should have a name property", () => {
    expect(animal1.name).toBeDefined();
    expect(animal2.name).toBeDefined();
  });
  it("should have an age property", () => {
    expect(animal1.age).toBeDefined();
    expect(animal2.age).toBeDefined();
  });
  it("should have a name property with value Cat", () => {
    expect(animal1.name).toEqual("Cat");
  });
  it("should have a name property with value Dog", () => {
    expect(animal2.name).toEqual("Dog");
  });
  it("should have an age property with value 2", () => {
    expect(animal1.age).toEqual(2);
  });
  it("should have an age property with value 3", () => {
    expect(animal2.age).toEqual(3);
  });
});

// Test for lion and snake objects
describe("lion and snake tests", () => {
  it("should have a name property", () => {
    expect(lion.name).toBeDefined();
    expect(snake.name).toBeDefined();
  });
  it("should have an age property", () => {
    expect(lion.age).toBeDefined();
    expect(snake.age).toBeDefined();
  });
  it("should have a sound property", () => {
    expect(lion.sound).toBeDefined();
    expect(snake.sound).toBeDefined();
  });
  it("should have a name property with value Lion", () => {
    expect(lion.name).toEqual("Lion");
  });
  it("should have a name property with value Snake", () => {
    expect(snake.name).toEqual("Snake");
  });
  it("should have an age property with value 8", () => {
    expect(lion.age).toEqual(8);
  });
  it("should have an age property with value 4", () => {
    expect(snake.age).toEqual(4);
  });
  it("should have a sound property with value roar", () => {
    expect(lion.sound).toEqual("roar");
  });
  it("should have a sound property with value hiss", () => {
    expect(snake.sound).toEqual("hiss");
  });
  it("should have a makeSound method", () => {
    expect(lion.makeSound).toBeDefined();
    expect(snake.makeSound).toBeDefined();
  });
  it("should return a string: I am a Lion and I sound like roar", () => {
    expect(lion.makeSound()).toEqual("I am a Lion and I sound like roar");
  });
  it("should return a string: I am a Snake and I sound like hiss", () => {
    expect(snake.makeSound()).toEqual("I am a Snake and I sound like hiss");
  });
});

// === City Functions Tests ===
// Tests for city-related functions, including getting city names, uppercase names, and the city with the lowest population
import { City, cities, getCityNames, getCityNamesInUpperCase, getCityWithLowestPopulation } from './week2';

describe('City Functions', () => {
  test('should return an array of city names', () => {
    const result = getCityNames(cities);
    expect(result).toEqual(['London', 'Berlin', 'New York']);
  });

  test('should return city names in uppercase', () => {
    const result = getCityNamesInUpperCase(cities);
    expect(result).toEqual(['LONDON', 'BERLIN', 'NEW YORK']);
  });

  test('should return the city with the lowest population', () => {
    const result = getCityWithLowestPopulation(cities);
    expect(result.name).toBe('Berlin');
  });
});

// === BankAccount Tests ===
// Tests for the BankAccount class, verifying balance operations and log functionality
import { BankAccount } from './week2';

describe('BankAccount', () => {
  let account: BankAccount;

  // Setup before each test: Initialize a new BankAccount instance
  beforeEach(() => {
    account = new BankAccount('John Doe', '12345');
  });

  test('should log increaseBalance with timestamp', () => {
    account.increaseBalance(100);
    const logEntry = account.log[0];
    const timestampRegex = /\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2}:\d{2} : \+100/;
    expect(logEntry).toMatch(timestampRegex);
    expect(account.getBalance()).toBe(100);
  });

  test('should log decreaseBalance with timestamp', () => {
    account.increaseBalance(200); // Add some balance first
    account.decreaseBalance(50);
    const logEntry = account.log[1];
    const timestampRegex = /\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2}:\d{2} : -50/;
    expect(logEntry).toMatch(timestampRegex);
    expect(account.getBalance()).toBe(150);
  });


});
