// 1. THE OBJECT (The Blueprint)
const budgetApp = {
  accountName: "Windie",
  balance: 100,

  // 'description' and 'cost' are the PARAMETERS
  // Think of these as "empty buckets" or placeholders.
  addExpense: function(description, cost) {
    this.balance -= cost;
    console.log(`Updated! Spent $${cost} on ${description}.`);
    console.log(`New balance: $${this.balance}`);
  }
};

// 2. THE ACTION (The Real Data)
// "Coffee" and 5 are the ARGUMENTS
// These are the "real bricks" we are dropping into the buckets.
budgetApp.addExpense("Coffee", 5);

// Output:
// Updated! Spent $5 on Coffee.
// New balance: $95
