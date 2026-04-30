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