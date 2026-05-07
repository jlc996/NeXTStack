console.log(10 % 3);

console.log(8 % 2);

const num = 7; 
const isEven = num % 2 === 0; 
console.log(isEven);

const age = 20; 
const status = age >= 18 ? 'adult' : 'minor'; 
console.log(status);

const index = 5; 
const color = index % 2 === 0 ? 'white' : 'lightgray'; 
console.log(color); 

const items = ['apple', 'banana', 'cherry', 'date']; 
for (let i = 0; i < items.length; i++) { 
    const color = i % 2 === 0 ? 'white' : 'lightgray'; 
    console.log(items[i] + ' - ' + color); 
}