// Code Along 1
// --- STARTER TEMPLATE ---

// Task 1: Traditional Function setup
function calculateTax(price, rate) {
    return price * rate;
}

console.log(calculateTax(100, 0.07).toFixed(2)); 


// Task 2: Refactored Arrow Function (Explicit variant)
const calculateTaxArrow = (price, rate) => {
    return price * rate;
}

console.log(calculateTaxArrow(100, 0.07).toFixed(2));

// Task 3: One-Liner Implicit Shortcut
const fastTax = (price, rate) => price * rate;

console.log(fastTax(100, 0.07).toFixed(2));

// Task 4: The Braces Trap Check
const brokenTax = (price, rate) => {price * rate};

console.log(brokenTax(100, 0.07));

// Code Along 2
// --- STARTER TEMPLATE ---

const chefProfile = {
    chefName: "Remi",
    specialty: "Pastry",
    
    // TODO: Add Method 1 - A traditional function statement logging data via 'this'
    introduceTraditional: function() {
        console.log(`Hi, I am Chef ${this.chefName} and I make ${this.specialty} designs!`);
    },
    
    // TODO: Add Method 2 - An arrow function context attempting to access 'this'
    introduceArrow: () => {
        console.log(`Hi, I am Chef ${this.chefName} and I make ${this.specialty} designs!`);
    }
};

// --- Execution Prompts ---
chefProfile.introduceTraditional();
chefProfile.introduceArrow();

// Code Along 3

const traditionalButton = document.querySelector('#trad-btn');
const arrowButton = document.querySelector('#arrow-btn');

// Traditional function ("this" handles target node)
traditionalButton.addEventListener('click', function(){
    console.log("Traditional Clicked! 'this' matches: ", this);
    this.style.backgroundColor = "lightgreen";
})

// Arrow function ("this" bypasses target node) - DOES NOT WORK DUE TO SCOPE OF 'this'
// arrowButton.addEventListener('click', () => {
//     console.log("Arrow Clicked! 'this' matched: ", this);
//     // try {
//     //     this.style.backgroundColor = 'coral';
//     // } catch (error){
//     //     console.error("Crash event! Cannot alter background properties: ", error.message);
//     // }
// })

// Button 2: Arrow Function Layout (Fixed via Event Target tracking)
arrowButton.addEventListener('click', (event) => {
    console.log("Arrow Clicked! Fixed context tracking via event.target.");
    
    // Safe from Window scope crashes!
    event.target.style.backgroundColor = 'coral';
});

// Code Along 4: The Dynamic Shopping Cart (Rest Parameter)
const calculateCartTotal = (...prices) => {
    console.log("Prices collected into an actual array: ", prices);

    let total = 0;
    for (let price of prices){
        total += price;
    }
    return total;
}

console.log(calculateCartTotal);