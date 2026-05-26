// Lesson 5.10 Practice Exercises
// Arrow Functions, “this” keyword, rest param

// 25 questions in total:
// 🚀 Concept 1: Arrow Functions
// Goal: Practice converting traditional functions into concise ES6 arrow functions and utilizing implicit returns.
// Exercise 1.1: The Basic Conversion Convert the traditional function into an arrow function.
// JavaScript
// Starter Code
function sayHello(name) {
    return "Hello, " + name;
}

console.log(sayHello("Josh"));

// TODO: Rewrite sayHello as an arrow function
const sayHellos = (name) => {
    return "Hello, " + name;
}

console.log(sayHellos("Josh"));

// Exercise 1.2: Implicit Return Rewrite the arrow function so that it fits on a single line without using the return keyword or curly braces {}.
// JavaScript
// Starter Code
const doubleNumber = (num) => {
    return num * 2;
};

console.log(doubleNumber(2))

// TODO: Refactor doubleNumber to use an implicit return
const doubleNumbers = (num) => num * 2;

console.log(doubleNumbers(2));

// Exercise 1.3: Multiple Parameters Create an arrow function that takes two parameters (price and taxRate) and returns the total cost.
// JavaScript
// Starter Code
// TODO: Create a const variable named calculateTotal and assign it an arrow function
const calculateTotal = (price, taxRate) => {
    return price + (price * taxRate);
}

console.log(calculateTotal(100, 0.07).toFixed(2))

// Exercise 1.4: No Parameters Create an arrow function that takes zero parameters and simply returns the string "Data successfully fetched!".
// JavaScript
// Starter Code
// TODO: Create an arrow function named fetchSuccess message 
const fetchSuccess = () => {
    return "Data successfully fetched!";
}

console.log(fetchSuccess);

// Exercise 1.5: Arrow Functions in Array Methods Use an arrow function inside the .map() method to add 5 to every number in the array.
// JavaScript
// Starter Code
const scores = [10, 20, 30, 40];

// TODO: Use .map() and an arrow function to create a new array called updatedScores
const updatedScores = scores.map(score => score + 5);

console.log(updatedScores);

// 🕵️‍♂️ Concept 2: Anonymous Functions
// Goal: Understand how to use functions that do not have a name, typically used as callbacks or assigned to variables.
// Exercise 2.1: The Variable Assignment Assign an anonymous function to the variable greetUser that logs "Welcome back!" to the console.
// JavaScript
// Starter Code
const greetUser = function () {
    console.log("Welcome back!");
}
greetUser();
// Exercise 2.2: The setTimeout Callback Use an anonymous function inside setTimeout to log "Time is up!" after 2 seconds (2000 milliseconds).
// JavaScript
// Starter Code
setTimeout(function () { console.log("Time is up!") }, 2000);

// Exercise 2.3: Event Listeners Attach an anonymous function to the button's click event that logs "Button clicked!"
// JavaScript
// // Starter Code
const myButton = document.querySelector("#my-btn");

// TODO: Use addEventListener to attach an anonymous function to a 'click' event
myButton.addEventListener('click', function () {
    console.log("Button clicked!");
})

// Exercise 2.4: The Callback Function Pass an anonymous function directly into the .filter() method to keep only words longer than 4 letters.
// JavaScript
// Starter Code
const words = ["dog", "elephant", "cat", "giraffe"];

// TODO: Create a const called longWords and use .filter() with an anonymous function
const longWords = words.filter(function (word) {
    return word.length > 4;
});

console.log(longWords);

// Exercise 2.5: Immediately Invoked Function Expression (IIFE) Create an anonymous function and immediately invoke (call) it to log "I ran immediately!"
// JavaScript
// // Starter Code
// // TODO: Wrap an anonymous function in parentheses and invoke it ()
(function () {
    console.log("I ran immediately!");
})();

// 🧮 Concept 3: Function Expressions
// Goal: Practice storing functions within variables, reinforcing that functions are simply "values" in JavaScript.
// Exercise 3.1: Basic Expression Write a function expression that subtracts two numbers and assign it to the variable subtract.
// JavaScript
// // Starter Code
// // TODO: Create a const variable `subtract` and assign a function expression to it
const subtract = function (a, b) {
    return a - b;
};

console.log(subtract(10, 4));

// Exercise 3.2: Expression with Logic Create a function expression named checkAge that returns "Adult" if age is 18 or older, and "Minor" if under 18.
// JavaScript
// Starter Code
const checkAge = function (age) {
    // TODO: Add conditional logic here
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Minor");
    }
};

console.log(checkAge(18));
console.log(checkAge(17));

// Exercise 3.3: Passing an Expression Create a function expression named sayGoodbye and pass it as an argument into the executeAction function.
// JavaScript
// Starter Code
function executeAction(actionFunc) {
    actionFunc();
}

// TODO: Define the `sayGoodbye` function expression
const sayGoodbye = function () {
    console.log("Goodbye!");
};

// TODO: Call executeAction and pass sayGoodbye into it
executeAction(sayGoodbye);

// Exercise 3.4: Reassigning an Expression Use let to declare a variable mathOperation. First, assign it a function expression that adds two numbers. Then, reassign it to a function expression that multiplies two numbers.
// JavaScript
// Starter Code
let mathOperation;

// TODO: Assign an addition function expression to mathOperation
mathOperation = function (a, b) {
    return a + b;
}

console.log(mathOperation(2, 3));

// TODO: Reassign mathOperation to a multiplication function expression
mathOperation = function (a, b) {
    return a * b;
}

console.log(mathOperation(2, 3));

// Exercise 3.5: Returning an Expression Write a function called multiplier that returns a new function expression.
// JavaScript
// Starter Code
function createMultiplier(multiplierValue) {
  // TODO: Return a function expression that multiplies a given number by multiplierValue
  return function (number) {
    return number * multiplierValue;
  }
}

const double = createMultiplier(2);

console.log(double(5));

// 🎒 Concept 4: The Rest Parameter (...)
// Goal: Learn how to handle functions that can accept any number of arguments by bundling them into an array.
// Exercise 4.1: Collecting Arguments Use the rest parameter to collect all passed arguments into an array called numbers and log the array.
// JavaScript
// Starter Code
function collectNumbers(... numbers /* TODO: Add rest parameter here */ ) {
  console.log(numbers);
}
collectNumbers(1, 2, 3, 4, 5);

// Exercise 4.2: First, Second, and the Rest Update the function parameters so that the first argument is assigned to winner, the second to runnerUp, and all remaining arguments are gathered into an array called others.
// JavaScript
// Starter Code
function raceResults( winner, runnerUp, ...others/* TODO: Add parameters here */ ) {
  console.log("Winner:", winner);
  console.log("Runner Up:", runnerUp);
  console.log("Others:", others);
}
raceResults("Alice", "Bob", "Charlie", "Dave");

// Exercise 4.3: Summing it All Up Use the rest parameter to accept any number of arguments, then use a loop or .reduce() to return their total sum.
// JavaScript
// Starter Code
function calculateSum(...numbers /* TODO: rest parameter */ ) {
  return numbers.reduce((total, number) => total + number, 0);// TODO: Return the total sum of all numbers
}

console.log(calculateSum(1, 2, 3, 4));

// Exercise 4.4: Finding the Maximum Use the rest parameter along with Math.max() to find the highest score in a dynamic list of arguments.
// JavaScript
// // Starter Code
// function getHighestScore(...scores) {
//   // TODO: Return the highest number using Math.max()
//   // Hint: You will need to use the spread operator (...) inside Math.max!
// }
// Exercise 4.5: Destructuring with Rest Use the rest parameter inside an array destructuring assignment to separate the first item from the remaining items.
// JavaScript
// // Starter Code
// const colors = ["red", "blue", "green", "yellow", "purple"];
// // TODO: Destructure the array so 'red' is in a variable `primary`, and the rest are in an array `secondaryColors`
// 📍 Concept 5: The this Keyword
// Goal: Understand how context affects the this keyword in JavaScript, a crucial concept for React components and object-oriented programming.
// Exercise 5.1: this in a Method Use the this keyword to access the brand and model properties from inside the object's method.
// JavaScript
// // Starter Code
// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   displayInfo: function() {
//     // TODO: Return a string like "Toyota Corolla" using the `this` keyword
//   }
// };
// Exercise 5.2: The Arrow Function Trap Change the getDetails method to a standard function expression so that the this keyword properly points to the user object instead of the global window.
// JavaScript
// // Starter Code
// const user = {
//   name: "Sarah",
//   // TODO: Fix this method so `this.name` works correctly
//   getDetails: () => {
//     return "User: " + this.name;
//   }
// };
// Exercise 5.3: this in an Event Listener Write an event listener where clicking the button changes its own text to "Clicked!" using the this keyword.
// JavaScript
// // Starter Code
// const myBtn = document.querySelector("#submit-btn");

// myBtn.addEventListener("click", function() {
//   // TODO: Use `this` to change the text content of the button
// });
// Exercise 5.4: Preserving this with Arrow Functions In this setTimeout, the this keyword loses its connection to the robot object. Fix it by converting the setTimeout callback into an arrow function so it inherits this from the speak method.
// JavaScript
// // Starter Code
// const robot = {
//   name: "Optimus",
//   speak: function() {
//     setTimeout(function() { // TODO: Change this to an arrow function
//       console.log("I am " + this.name);
//     }, 1000);
//   }
// };
// Exercise 5.5: Explicit Binding with .call() Use the .call() method to borrow the sayHi function and manually force its this context to point to the guest object.
// JavaScript
// // Starter Code
// function sayHi() {
//   console.log("Hi, " + this.name);
// }

// const guest = { name: "David" };

// // TODO: Invoke sayHi using .call() so that it prints "Hi, David"

