// 1. Create a new file called practice-modulo-ternary.js in your code editor.

// 2. Write code to check if the number 15 is divisible by 5 using the modulo operator. Print the result to the console. Hint: use 15 % 5.
const isDivisible = 15 % 5 === 0;
console.log(isDivisible);

// 3. Write a program that checks if a number is odd or even using modulo and ternary. Create a variable number = 12 and use a ternary operator to assign the string 'even' or 'odd' to a new variable called result. Print the result.
let number = 12;
let result = number % 2 === 0 ? 'even' : 'odd';
console.log(`The number ${number} is ${result}.`);

// 4. Create a function called getStripColor that takes an index as a parameter. Inside the function, use modulo and ternary to return 'white' if the index is even and 'gray' if the index is odd. Call the function three times with different numbers and print the results.
function getStripColor(index){
    return index % 2 === 0 ? 'white' : 'gray';
}

console.log(getStripColor(15));
console.log(getStripColor(8));
console.log(getStripColor(0));

// 5. Create an array of 6 student names. Use a for loop to go through each name with its index. For each name, use modulo and ternary to assign a seat color: 'red' for even indexes and 'blue' for odd indexes. Print each name with its assigned seat color.
const names = ['Josh', 'John', 'Joan', 'Jocelyn', 'Johnathan', 'Johnny']
for (let i = 0; i < names.length; i++){
    const color = i % 2 === 0 ? 'red' : 'blue'; 
    console.log(names[i] + ' - ' + color); 
}

// 6. Write code that simulates a carousel with 4 items. Create a variable currentIndex = 0. Use modulo to create circular logic so that if you add 1 to currentIndex and it reaches 4, it wraps back to 0. Test this by incrementing currentIndex several times and printing currentIndex % 4.
for (let currentIndex = 0; currentIndex <= 5; currentIndex ++){
    console.log(currentIndex % 4);
}

// 7. Create a discount calculator: if a customer's total purchase is over 100 dollars, apply a 10 percent discount using a ternary operator. If not, no discount. Test it with at least two different amounts and print the final price.
function discountCalculator(purchase){
    return purchase >= 100 ? purchase-(purchase*.1) : purchase;
}

console.log(discountCalculator(120));
console.log(discountCalculator(80));