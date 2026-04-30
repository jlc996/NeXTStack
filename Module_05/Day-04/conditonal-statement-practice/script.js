// Part 1: Basics & Comparison Operators
// Focus on if/else structure and standard comparisons (>, <, >=, <=).

// 1 The Gatekeeper: Write an if/else statement that checks if a variable age is 18 or older. If true, log "Access Granted"; otherwise, log "Access Denied."
let age = 19;

if (age >= 18){
    console.log(`Access Granted!`);
}
else {
    console.log(`Access denied.`);
};

// 2 Highs and Lows: Create a script that compares two numbers, a and b. Log "a is greater," "b is greater," or "They are equal."
let a = 5;
let b = 5;

if (a > b){
    console.log(`${a} is greater.`);
}
else if (a < b){
    console.log(`${b} is greater.`);
}
else {
    console.log(`They are equal.`)
};

// 3 Passing Grade: Given a variable score, write a conditional that logs "Pass" if the score is 65 or higher, and "Fail" if it is lower.
let score = 65;

if (score >= 65){
    console.log(`Pass!`);
}
else {
    console.log(`Fail.`);
};

// 4 Budget Check: You have a bankBalance and a purchaseAmount. Write an if/else statement that checks if you have enough money to buy the item. If you do, subtract the purchaseAmount from bankBalance and log the new balance. If you don't, log "Insufficient funds."
let bankBalance = 5000;
let purchaseAmount = 5;

if (bankBalance >= purchaseAmount){
    bankBalance = bankBalance - purchaseAmount;
    console.log(`New balance: ${bankBalance}`);
}
else {
    console.log(`Insufficient funds.`)
}

// Part 2: Strict vs. Loose Equality
// Understanding the difference between == and ===.

// 5 The Type Trap: What will if ("5" == 5) evaluate to? Write a comment explaining why.
// It will evaluate to true because it is a loose equality.

// 6 Strict Standards: What will if ("5" === 5) evaluate to? Write a comment explaining why.
// It will evaluate to false because it is a strict equality.

// 7 The Null Check: Compare null and undefined using loose equality (==). Then compare them using strict equality (===). What are the results? 
let y = null;
let z;

if (y == z){
    console.log(`y and z are loosely equal.`);
}
else {
    console.log(`y and z are not loosely equal.`)
};

if (y === z){
    console.log(`y and z are strictly equal.`);
}
else {
    console.log(`y and z are not strictly equal.`)
};

// They are loosely equal but not strictly equal.

// 8 Inequality Practice: Write a statement that checks if userInput is not strictly equal to the number 0.

let userInput;

if (userInput !== 0){
    console.log(`${userInput} is not equal to 0.`);
};

// Part 3: Logical Operators
// Combining conditions using AND (&&), OR (||), and NOT (!).
// 9 The Range Finder: Write a condition that checks if a number x is between 10 and 20 (inclusive).
let x = 15;

if (x > 10 && x < 20){
    console.log(`${x} is between 10 and 20.`);
}
else {
    console.log(`${x} is not between 10 and 20.`);
};

// 10 Weekend Warrior: Create a variable day. Write a conditional that logs "Time to rest" if the day is "Saturday" or "Sunday."
let day = `Saturday`

if (day == `Saturday` && day == `Sunday`){
    console.log(`Time to rest.`)
}

//  11 The Toggle: Use the NOT operator (!) to flip the value of a boolean variable isLoggedIn and log the new state.
let isLoggedIn = true;
isLoggedIn = !isLoggedIn;

// 12 Complex Eligibility: A user can enter a club if they are 21+ OR if they have a specialPass AND are at least 18. Write this logic in one if statement.
age = 20;
let specialPass = true;

if (age >= 21 || (specialPass == true && age >= 18)){
    console.log(`You can enter the club!`);
};

// Part 4: Truthy and Falsy
// Understanding how non-boolean values behave in conditions.

// 13 Empty Strings: If let username = "";, what will if (username) evaluate to?
// It will evaluate to false because it is an empty string.

// 14 The Default: Use the OR (||) operator to assign a variable displayName. It should take the value of customName, but if customName is falsy, it should default to "Guest."
let customName;
let displayName = customName || `Guest`;

console.log(displayName);

// 15 Zero Logic: Explain why if (0) will not execute its block, while if (-1) will.
// 0 is considered a falsy value while -1 has an actual numeric value. 

// 16 Existence Check: Write a conditional that checks if a variable data is neither null nor undefined before logging "Data received."
x = null;

if (x !== null && x !== undefined){
    console.log(`Data received.`);
}
else {
    console.log(`Data not received.`);
};

// Part 5: Advanced Math & Nested Logic (OPTIONAL)
// Using Math methods and deeper nesting.

// 17 Rounding Logic: Use Math.round() on a variable. If the rounded result is greater than 5, log "Big number"; otherwise, log "Small number."
let num = 5.5;
let rounded = Math.round(num);

if (rounded > 5){
    console.log(`Big number.`);
}
else {
    console.log(`Small number.`);
};

// 18 Random Chance: Use Math.random() to generate a number. Write a conditional that logs "Heads" if the number is 0.5 or above, and "Tails" if it is below.
let rand = Math.random();

if (rand >= 0.5){
    console.log(`Heads.`);
}
else {
    console.log(`Tails.`);
};

// 19 The Power Play: Use Math.pow() or the exponentiation operator (**) to square a number. If the result is over 100, log "Out of bounds."
num = 11;
let squared = Math.pow(num, 2);
//let squared = num ** 2;

if (squared > 100) {
    console.log(`Out of bounds.`);
} else {
    console.log(`Within bounds.`);
}

// 20 Nested Discounts: Write a script where:
// If a user is a "Member", they get a 20% discount.
// If they are a member AND their purchase is over $100, they get a 30% discount instead.
// Non-members get no discount.
let user = `Member`;
let purchase = 120;

let discount = 0;

if (user === `Member`) {
    if (purchase > 100) {
        discount = 30;
    } else {
        discount = 20;
    }
} else {
    discount = 0;
}

console.log(`Discount: ${discount}%`);