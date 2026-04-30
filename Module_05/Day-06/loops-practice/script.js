const animals = ['cat', 'dog', 'bunny', 'gecko'];

// Modern for...of loop
console.log('Modern for...of loop.')
for (const animal of animals){
    console.log(animal);
}

console.log("");

// Classic for loop
console.log('Classic for loop.')
for (let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

console.log("");

// While loop
console.log('While loop.')
let count = 0;
while (count < animals.length){
    console.log(animals[count]);
    count ++;
}

// Adding loop
console.log('Adding loop.')
const prices = [4.99, 6.99, 1.99, 9.99, 20];
let totalPrice = 0;
for (let i = 0; i < prices.length; i++){
    totalPrice += prices[i];
}
console.log(totalPrice);

console.log("");

totalPrice = 0;
for (const price of prices){
    totalPrice += price;
}
console.log(totalPrice);

console.log("");

totalPrice = 0;
let i = 0;

while (i < prices.length) {
    totalPrice += prices[i];
    i++;
}

console.log(totalPrice);