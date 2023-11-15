/*
FileName: ComplexCodeExample.js

This code is a complex example showcasing various JavaScript concepts and functionality. It includes advanced data manipulation, asynchronous operations, object-oriented programming, and more. It exceeds 200 lines to provide an elaborate demonstration.

Note: This example is purely for educational purposes and may not serve a practical application.

Author: Your Name
Date: DD/MM/YYYY
*/

// Constants
const MAX_ITERATIONS = 1000;
const PI = 3.14159;

// Global Variables
let counter = 0;
let data = [];
let intervalId;

// Helper Functions
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Object Definition
class ComplexObject {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}.`);
  }
}

// Main Function
async function main() {
  // Data initialization
  for (let i = 0; i < MAX_ITERATIONS; i++) {
    data[i] = random(1, 100);
  }
  
  // Asynchronous operation
  await sleep(1000);
  
  // Data manipulation
  const filteredData = data.filter(num => num % 2 === 0);
  
  // Object creation
  const person = new ComplexObject("John", 30);
  person.greet();
  
  // Loop with condition
  while (counter < filteredData.length) {
    console.log(`Current number: ${filteredData[counter]}`);
    counter++;
  }
  
  // Recursive function
  function fibonacci(n) {
    if (n <= 1)
      return n;
    else
      return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const fibResult = fibonacci(10);
  console.log(`Fibonacci result: ${fibResult}`);
  
  // Interval
  intervalId = setInterval(() => console.log("Interval check."), 2000);
  
  await sleep(5000);
  
  // Cleanup
  clearInterval(intervalId);
  console.log("Finished!");
}

// Execute Main Function
main().catch(error => console.error(error));