// Get user input (returns "true" or "false" as strings)
let hasHomeworkInput = prompt("Do you have homework? (yes/no)").toLowerCase();
let hasTimeToPlayInput = prompt("Do you have time to play? (yes/no)").toLowerCase();

// Convert string inputs to actual Booleans
let hasHomework = (hasHomeworkInput === "yes");
let hasTimeToPlay = (hasTimeToPlayInput === "yes");

if (hasHomework && hasTimeToPlay) {
    console.log("You can play after finishing your homework.");
} else if (hasHomework && !hasTimeToPlay) {
    console.log("You need to finish your homework before you can play.");
} else if (!hasHomework && hasTimeToPlay) {
    console.log("You can play!"); 
} else {
    console.log("You can relax and enjoy your free time!");
}