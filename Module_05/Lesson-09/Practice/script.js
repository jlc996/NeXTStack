// Practice: Ternary, Modulo, & Advances Math

// Part 1: Ternary Operator Exercises
// Focus: Concise conditional logic.

// Toggle Switch: Given a boolean isActive, return the string "ON" if true and "OFF" if false.
function toggleSwitch (isActive){
    return isActive ? 'ON' : 'OFF';
}

console.log(toggleSwitch(true));
console.log(toggleSwitch(false));
console.log('')
// Access Level: If isAdmin is true, return "Full Access", otherwise return "Restricted".
function accessLevel(isAdmin){
    return isAdmin ? 'Full Access' : 'Restricted';
}

console.log(accessLevel(true));
console.log(accessLevel(false));
console.log('')
// Absolute Value: Write a ternary that returns the absolute value of a number n without using Math.abs().
function absoluteValue(n) {
    return n < 0 ? -n : n;
}

console.log(absoluteValue(-7));
console.log(absoluteValue(5));
console.log('')
// Null Safety: If input is null, assign "Default", otherwise assign input.

function nullSafety(input ) {
    return input === 0 || input === null ? 'Default' : input;
}

console.log(nullSafety(0));
console.log(nullSafety(null));
console.log(nullSafety('Hello World.'));
console.log('')
// Inventory Check: If stock is 0, return "Out of Stock"; if greater than 0, return "In Stock".
function inventoryCheck(stock){
    return stock <= 0 ? 'Out of Stock' : 'In Stock';
}

console.log(inventoryCheck(-1));
console.log(inventoryCheck(500));
console.log('')
// Part 2: Modulo Operator Exercises
// Focus: Divisibility, cycles, and constraints.

// Even/Odd: Use modulo to determine if a number x is even.
function evenOdd(x){
    return x % 2 === 0;
}

console.log(evenOdd(2));
console.log(evenOdd(4567));
console.log('')
// Leap Year Logic: Check if a year is divisible by 4 (a simplified leap year check).
function leapYear(year){
    return year % 4 === 0;
}

console.log(leapYear(2024));
console.log(leapYear(2025));
console.log('')
// Circular Array Index: Given an index i and array length L, find the effective index i % L to keep it within bounds.
function circularIndex(i, L){
    return i % L;
}

console.log(circularIndex(0, 4)); 
console.log(circularIndex(1, 4)); 
console.log(circularIndex(4, 4)); 
console.log(circularIndex(5, 4)); 
console.log(circularIndex(8, 4)); 
console.log('')
// Time Conversion: Given total seconds, use modulo to find the remaining "seconds" component after extracting minutes.


// Grid Coordinates: In a 1D array representing a 10x10 grid, find the column index of any element i.
function gridCoord(i){
    return i % 10;
}

console.log(gridCoord(0));
console.log(gridCoord(7));
console.log(gridCoord(10));
console.log(gridCoord(14));
console.log(gridCoord(99));
console.log('')
// Part 3: Advanced Math Exercises (OPTIONAL)
// Focus: Logarithms, powers, and trigonometry.
// Compound Interest: Calculate $A = P(1 + \frac{r}{n})^{nt}$ for given variables.
// Hypotenuse: Use the Pythagorean theorem $a^2 + b^2 = c^2$ to find $c$.
// Binary Depth: Given $N$ nodes in a balanced binary tree, calculate the height using $\log_2(N)$.
// Distance Formula: Calculate the Euclidean distance between $(x_1, y_1)$ and $(x_2, y_2)$.
// Growth Rate: Calculate exponential growth over time $t$ using $e^{rt}$.


// Part 4: Mixed Fundamentals
// Focus: Intermediate logic patterns.
// FizzBuzz Lite: If n is divisible by 3, return "Fizz", else return the number.
function fizzBuzz(n){
    return n % 3 === 0 ? 'Fizz' : n;
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(7));
console.log('')
// Hex to RGB: Calculate the remainder when a large hex value is divided by 256 to isolate a color channel.
function hexToRGB(val){
    return val % 256;
}

console.log(hexToRGB(16711680));
console.log(hexToRGB(16711935));
console.log(hexToRGB(66051));
console.log('')
// Rounding via Modulo: Subtract n % 1 from n to simulate a "floor" function for positive floats.
function rounding(n){
    return n - n % 1;
}

console.log(rounding(9.99));
console.log(rounding(8.08));
console.log(rounding(12.004));
console.log('')
// Unit Conversion: Convert inches to "Feet and Inches" using floor division and modulo.
function convertInches(inches) {
    let feet = Math.floor(inches / 12);
    let remainingInches = inches % 12;

    return feet + ' feet ' + remainingInches + ' inches';
}

console.log(convertInches(30));
console.log(convertInches(24));
console.log('');
// Sine Wave Scaling: Map the output of $\sin(x)$ (which is -1 to 1) to a range of 0 to 100.

// Part 5: Combined Challenges (OPTIONAL)
// These problems integrate ternary logic, modulo arithmetic, and advanced math.
// 1. The Circular Buffer Alert
// You are managing a data buffer of size S. Given a new data pointer P and a threshold T, write a statement that:
// Calculates the next position using modulo.
// Uses a ternary operator to return "WARNING" if the next position is exactly equal to the threshold T, otherwise returns "OK".
// 2. The Logarithmic Billing Tier
// A cloud service charges based on the magnitude of requests.
// Calculate the "Magnitude" using $M = \lfloor \log_{10}(\text{requests}) \rfloor$.
// Use a ternary to check if requests % 1000 == 0. If true, apply a "Bulk Discount" string; otherwise, return "Standard Rate".
// 3. The Responsive Grid Engine
// You are rendering a dynamic UI.
// Calculate the number of columns C using $\text{ceil}(\text{TotalWidth} / \text{MinWidth})$.
// Use modulo to find if a specific item Index is in the last column.
// Use a ternary to return a specific CSS margin value: if in the last column, 0px, else 10px.
// 4. Periodic Wave Trigger
// A sensor collects data at frequency $f$.
// Calculate the current amplitude using $A = \sin(2\pi ft)$.
// Use a ternary to check if the amplitude is positive or negative.
// If positive, return the result of count % 2 (to toggle a light); if negative, return 0.
// 5. Normalized Probability Check
// In a simulation, you have a raw score $S$.
// Normalize the score to a probability $P$ using the Sigmoid function:
// $$P = \frac{1}{1 + e^{-S}}$$
// Use a ternary operator to check if $P > 0.5$.
// If true, return the result of (S * 100) % 10 to generate a "sub-category" ID; otherwise, return 0.





// Input Variables
const totalWidth = 1000; // Total width of the container in px
const minWidth = 250;   // The minimum width each column should be
const index = 7;        // The index of the item we are checking (8th item)

// Step 1: Calculate Total Columns (C)
// We use Math.ceil because even a partial column requires a full "slot" in the grid
const columns = Math.ceil(totalWidth / minWidth); 

// Step 2: Determine if item is in the Last Column
// We use (index + 1) to convert 0-based index to a 1-based position.
// If position % columns === 0, it is the far-right item.
const isLastColumn = (index + 1) % columns === 0;

// Step 3: Assign CSS Margin via Ternary
const marginValue = isLastColumn ? "0px" : "10px";

// Output results
console.log(`Grid Columns: ${columns}`);
console.log(`Is item ${index} in the last column? ${isLastColumn}`);
console.log(`Margin to apply: ${marginValue}`);