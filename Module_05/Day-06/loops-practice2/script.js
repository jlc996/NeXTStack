// The Switch Statement: "The Coffee Shop Menu"

// The Goal: Show how switch replaces a long chain of if/else if statements to make code more readable.
// The Setup: Write an if/else block first, then "refactor" it into a switch live. It handles different drink orders and provides a price.


let order = "Latte"; 

if (order = "Espresso") {
    console.log("That will be $3.00");
}
else if (order = "Latte") {
    console.log("That will be $4.50.");
}
else if (order = "Cappuccino") {
    console.log("That will be $4.50.");
}
else if (order = "Cold Brew") {
    console.log("That will be $5.00.");
}
else {
    console.log("Sorry, we don't have that on the menu.");
}

// switch (order) {
//   case "Espresso":
//     console.log("That will be $3.00.");
//     break;
//   case "Latte":
//   case "Cappuccino":
//     console.log("That will be $4.50."); // Show how cases can share logic!
//     break;
//   case "Cold Brew":
//     console.log("That will be $5.00.");
//     break;
//   default:
//     console.log("Sorry, we don't have that on the menu.");
// }

console.log("Truthy & Falsy: The Form Validator");
// The Goal: Demonstrate how JavaScript evaluates "existence" without needing explicit comparisons like == true.
// The Setup: Simulate a user filling out a profile. If a field is empty (falsy), we show a warning.
// JavaScript

let username = ""; // Falsy
let bio = "Hello world!"; // Truthy
let age = 0; // Falsy (Important: 0 is falsy even though it's a number!)

if (!username) {
  console.log("Warning: Username cannot be empty.");
}

if (bio) {
  console.log("Bio saved successfully.");
}

if (age === null || age === undefined) {
  console.log("Warning: Please enter a valid age.");
}
else {
    console.log(age) // 0 will now work
}

// if (!age) {
//   console.log("Warning: Please enter a valid age.");
// }

console.log("Nested Arrays: The Seating Chart");
// The Goal: Visualize data in rows and columns and practice "bracket-chaining" to grab specific items.
// The Setup: Create a 3x2 grid representing rows of students in a classroom.
// JavaScript
// Each inner array is a "row" in the classroom

const classroom = [
  ["Alex", "Blake"], // Row 0
  ["Charlie", "Dakota"], // Row 1
  ["Emerson", "Frankie"] // Row 2
];

// Challenge the class: How do we get "Dakota"?
console.log(classroom[1][1]); 

// Challenge the class: How do we get "Alex"?
console.log(classroom[0][0]);

console.log("Inventory Manager")
// Inventory Manager for a game
const inventory = [
  ["Healing Potion", 5],
  ["Iron Sword", 1],
  ["Shield", 0],
  ["Mystery Map", 1]
];

function useItem(index) {
  const item = inventory[index];

  // 1. Truthy check: Does the item exist in this slot?
  if (!item) {
    console.log("That inventory slot is empty!");
    return;
  }

  const itemName = item[0];
  const quantity = item[1];

  // 2. Falsy check: Do we have enough quantity to use it?
  if (!quantity) {
    console.log(`You have no ${itemName}s left!`);
  } else {
    // 3. Switch statement for item logic
    switch (itemName) {
      case "Healing Potion":
        console.log("You recovered 20 HP!");
        break;
      case "Iron Sword":
        console.log("You swung the sword for 10 damage!");
        break;
      // Add the remaining cases here!
      default:
        console.log("Item used.");
    }
  }
}

// Test cases for the students to run:
useItem(0); // Should work
useItem(2); // Should trigger "no quantity" (falsy check)
useItem(10); // Should trigger "empty slot" (existence check)