// Part 1: for...of Loops (Iterating Arrays)
// Best for: Reading every item in a list without needing to know its position.
// 1. The Greeter: Create an array of names. Use a for...of loop to print "Hello, [Name]!" for each person.
const names = ['John', 'Josh', 'Jordan'];

for (const name of names){
    console.log(`Hello, ${name}`);
}

console.log("");

// 2. Price Totaler: Given an array of prices (numbers), use a loop to calculate the total sum.
const prices = [1, 2, 3, 4, 5];
let totalPrice = 0;
for (const price of prices){
    totalPrice += price;
}
console.log(totalPrice);

console.log("");

// 3. The Filter: Given an array of numbers, loop through them and print only the numbers greater than 50.
const numbers = [20, 30, 50, 60, 70]

for (const number of numbers){
    if (number > 50){
        console.log(number);
    }
}

console.log('');

// 4. String Lengths: Iterate through an array of strings and print the length of each string.
const words = ['this', 'that', 'other'];

for (const word of words) {
    console.log(word.length);
}

console.log("")

// 5. Inventory Check: Given an array of fruit names, check if "Apple" exists. If found, log "Apple is in stock!"
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

for (const fruit of fruits) {
    if (fruit === "Apple") {
        console.log("Apple is in stock!");
    }
}

console.log("");

// Part 2: Classic for Loops (Index-Based)
// Best for: Tracking position, reversing, or skipping items using $i$.
// 6. The Countdown: Write a loop that counts down from 10 to 1 and then logs "Liftoff!"
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Liftoff!");

console.log("");

// 7. Step Skip: Loop through an array of 10 items, but only print every second item (index 0, 2, 4...).
const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

for (let i = 0; i < items.length; i += 2) {
    console.log(items[i]);
}

console.log("");

// 8. Reverse Array: Given an array ['a', 'b', 'c', 'd'], use a classic for loop to print the items in reverse order.
const letters = ['a', 'b', 'c', 'd'];

for (let i = letters.length - 1; i >= 0; i--) {
    console.log(letters[i]);
}

console.log("");

// 9. Index Labeler: Loop through an array and print: "Item at index [i] is [value]".
// reuse const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

for (let i = 0; i < items.length; i++) {
    console.log(`Item at index ${i} is ${items[i]}`);
}

console.log("");

// 10. The Accumulator: Create a loop that calculates the sum of all numbers from 1 to 100 ($1 + 2 + 3...$).
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

console.log("");

// Part 3: while Loops (Condition-Based)
// Best for: Looping until a specific state changes, rather than a specific count.
// 11. Dice Roll: Use Math.random() to "roll a die" inside a while loop. Keep rolling until you hit a 6.
let roll = 0;

while (roll !== 6) {
    roll = Math.floor(Math.random() * 6) + 1;
    console.log("Rolled:", roll);
}

console.log("You rolled a 6!");

console.log("");

// 12. The Password Prompt: (Pseudo-code) Simulate a login where a loop keeps asking for a password until the input matches "12345".
let password = "";
const correctPassword = "12345";

while (password !== correctPassword) {
    // get user input
    password = prompt("Enter password:");
}

console.log("Access granted!");

console.log("");

// 13.Power of Two: Write a loop that starts at 2 and multiplies itself by 2 each time, stopping once it exceeds 1,000.
let num = 2;

while (num <= 1000) {
    num *= 2;
}

console.log("Number met 1000.");

console.log("");

// 14. Countdown Timer: Start with a variable energy = 100. Loop while energy > 0, subtracting a random amount (1-10) each time and logging the remaining energy.
let energy = 100;

while (energy > 0) {
    let drain = Math.floor(Math.random() * 10) + 1; // 1–10
    energy -= drain;

    console.log("Energy left:", energy > 0 ? energy : 0);
}

console.log("")

// 15. The Searcher: Loop through an array of numbers using while. Stop the loop as soon as you find the number 42.
const number = [10, 25, 30, 42, 55, 60];

let i = 0;

while (i < number.length) {
    if (number[i] === 42) {
        console.log("Found 42 at index", i);
        break;
    }
    i++;
}

// const number = [10, 25, 30, 55, 60]; // try without 42

// let i = 0;
// let foundIndex = -1;

// while (i < number.length) {
//     if (number[i] === 42) {
//         foundIndex = i;
//         break;
//     }
//     i++;
// }

// console.log(foundIndex);

console.log("");

// Part 4: Debugging & Advanced Logic
// Best for: Catching errors and handling data manipulation.
// 16. Fix the Infinite: Identify why this loop never ends and fix it:
// for (let i = 10; i > 0; i++) { console.log(i); }
// 17. The Off-By-One: You have an array of length 5. Write a loop that correctly accesses every index without getting undefined on the last iteration.
// 18. Search and Replace: Given an array of strings, use a loop to find any item named "FixMe" and change its value to "Fixed" before printing the final array.
// 19. Data Cleaner: Given an array containing strings and null values, use a loop to create a new array that only contains the valid strings.
// 20. Nested Loop (Bonus): Create a 2D array (an array of arrays). Use a loop inside a loop to print every individual value.
