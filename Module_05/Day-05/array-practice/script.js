// Exercise Set 1: Adding Elements
// Goal: Practice adding items to the beginning and end of an array.
// 1. The New Puppy: Create an array called pets with "Cat" and "Dog". Add "Hamster" to the end of the array.
const pets = ["Cat", "Dog"];
console.log(pets);
pets.push("Hamster");
console.log(pets);

// 2. Morning Routine: Create an array with "Brush Teeth". Add "Wake Up" to the very beginning.
const routine = ["Brush Teeth"];
console.log(routine);
routine.unshift("Wake Up");
console.log(routine);

// 3. The Growing Garden: Start with an array flowers containing "Rose". Add "Tulip" and then "Daisy" to the end (one by one).
const flowers = ["Rose"]
console.log(flowers);
flowers.push("Tulip");
console.log(flowers);
flowers.push("Daisy");
console.log(flowers);

// 4. Race Results: You have an array runners with "Alice" and "Bob". A faster runner, "Zane", just took 1st place. Add "Zane" to the front.
const runners = ["Alice", "Bob"];
console.log(runners);
runners.unshift("Zane");
console.log(runners);

// 5. Book Shelf: Create an empty array library. Add your favorite book title to it.
const library = [];
console.log(library);
library.push("Grimm's Complete Fairy Tales");
console.log(library);

// 6. Fruit Basket: Start with ["Apple", "Banana"]. Add "Orange" to the end.
const basket = ["Apple", "Banana"];
console.log(basket);
basket.push("Orange");
console.log(basket);

// 7. To-Do List: Create an array with "Clean Room". Add "Do Laundry" to the front.
const list = ["Clean Room"];
console.log(list);
list.unshift("Do Laundry");
console.log(list);

// Exercise Set 2: Removing Elements
// Goal: Practice removing items from the beginning and end of an array.
// 8. The Last Cookie: You have ["Oatmeal", "Sugar", "Choco-Chip"]. Remove the last cookie from the array.
const cookies = ["Oatmeal", "Sugar", "Choco-Chip"];
console.log(cookies);
cookies.pop();
console.log(cookies);

// 9. Bus Stop: A bus has ["Driver", "Alice", "Bob"]. The driver gets off first (the front). Remove the first element.
const bus = ["Driver", "Alice", "Bob"];
console.log(bus);
bus.shift();
console.log(bus);

// 10.Pop Quiz: Create an array with three numbers. Use a method to remove the last number.
const numb = [1, 2, 3];
console.log(numb);
numb.pop();
console.log(numb);

// 11. Expired Milk: You have ["Milk", "Eggs", "Bread"]. The milk (at the front) is expired. Remove it.
const fridge = ["Milk", "Eggs", "Bread"];
console.log(fridge);
fridge.shift();
console.log(fridge);

// 12. Cleaning the Closet: Start with ["Shirt", "Pants", "Old Socks"]. Remove the last item.
const closet = ["Shirt", "Pants", "Old Socks"];
console.log(closet);
closet.pop();
console.log(closet);

// 13. Finish the Race: The person in the lead (the front) finished the race. Remove the first person from the racers array.
const race = ["lead", "mid", "last"];
console.log(race);
race.shift();
console.log(race);

// Exercise Set 3: Accessing & Modifying
// Goal: Use index numbers (0, 1, 2...) to see and change specific items.
// 14. Secret Code: Create an array with three random letters. Change the second letter to "X" using its index.
const letters = ["A", "B", "C"];
console.log(letters);
letters[1] = "X";
console.log(letters);

// 15. The Wrong Name: You have ["Sam", "Smae", "Tim"]. The second name is spelled wrong. Fix it to "Sasha" using array[index] = "value".
const wrong = ["Sam", "Smae", "Tim"];
console.log(wrong);
wrong[1] = "Sasha";
console.log(wrong);

// 16. Favorite Color: Create an array of 4 colors. Use console.log to print only the first color.
const color = ["blue", "green", "red", "black"];
console.log(color);
console.log(color[0]);

// 17. Lucky Number: Create an array of 5 numbers. Change the last number to 777.
const lucky = [1, 2, 3, 4, 5];
console.log(lucky);
lucky[4] = 777;
console.log(lucky);

// 18. The Gold Medal: Create an array of three names. Print a message like "The winner is " plus the name at index 0.
const medal = ["name1", "name2", "name3"];
console.log(medal);
console.log(`The winner is ${medal[0]}.`);

// Exercise Set 4: Mixed Practice
// Goal: Combining adding and removing.
// 19. The Guest List: Start with ["Anna"]. Add "Bill" to the end. Then, remove "Anna" from the front. Who is left?
const guests = ["Anna"];
console.log(guests);
guests.push("Bill");
console.log(guests);
guests.shift();
console.log(guests);

// 20. Swap Meet: Start with an array ["Toy Car"]. Add "Action Figure" to the end. Now, remove "Toy Car" from the front.
const swapMeet = ["Toy Car"];
console.log(swapMeet);
swapMeet.push("Action Figure");
console.log(swapMeet);
swapMeet.shift();
console.log(swapMeet);

// ___________________________________________________________________________


// Exercise Set 5: The .length Property
// Goal: Understand that arrays have a "size" or "count".
// 21. Count the Pets: Create an array called myPets with 4 animals. Use .length to print how many pets you have.
const myPets = ["pet1", "pet2", "pet3", "pet4"];
console.log(myPets);
console.log(myPets.length);

// 22. Empty Box: Create an empty array []. Use .length to show that it equals 0.
const emptyBox = [];
console.log(emptyBox);
console.log(emptyBox.length);

// 23. Adding & Counting: Start with an array of 2 fruits. .push() a third fruit. Now, use .length to show the new total.
const fruit = ["apple", "melon"]
console.log(fruit);
fruit.push("strawberry");
console.log(fruit);
console.log(fruit.length);

// 24. The Last Index Rule: If an array has a .length of 5, what is the index number of the very last item? (Hint: It’s always length minus 1).
// 4

// 25. Class Attendance: Create an array of 6 student names. Print: "There are " + names.length + " students in class."
const names = ["student1", "student2", "student3", "student4", "student5", "student6"];
console.log(names);
console.log("There are " + names.lenght + " students in class.");

// Exercise Set 6: Finding with .indexOf()
// Goal: Find the "address" (index) of a specific item.
// 26. Where is Waldo? Create an array ["Alice", "Waldo", "Bob"]. Use .indexOf("Waldo") to find his position.
const where = ["Alice", "Waldo", "Bob"];
console.log(where);
console.log(where.indexOf("Waldo"));

// 27. Missing Item: Try to find the .indexOf() a name that is not in your array. What number does JavaScript give you? (Spoiler: It's -1).
console.log(where.indexOf("Josh"));

// 28. Color Finder: Create an array of 5 colors. Find the index of "Blue".
const colors = ["red", "yellow", "blue", "green", "purple"];
console.log(colors);
console.log(colors.indexOf("blue"));

// 29. The First Place: Create an array of racers. Use .indexOf() to confirm that the person in the lead is at index 0.
const racers = ["racer1", "racer2", "racer3"];
console.log(racers);
console.log(racers.indexOf("racer1"));

// 30. Double Check: Create an array ["Apple", "Orange", "Apple"]. Use .indexOf("Apple"). Does it give you the first one or the last one?
const baskets = ["Apple", "Orange", "Apple"];
console.log(baskets);
console.log(baskets.indexOf("Apple")); // First case of Apple is shown.

// Exercise Set 7: Transforming with .map()
// Note: Since they don't know functions, explain this as "doing the same math to every item in a list."
// 31. Double the Numbers: You have [1, 2, 3]. Use .map() to create a new array where every number is multiplied by 2.
const numbersToDouble = [1, 2, 3];
console.log(numbersToDouble);
const doubled = numbersToDouble.map(num => num * 2);
console.log(doubled);

// 32. Shouting Names: Start with ["hi", "hello"]. Use .map() to change them to uppercase: ["HI", "HELLO"].
const normal = ["hi", "hello"];
console.log(normal);
const shouted = normal.map(word => word.toUpperCase());
console.log(shouted);

// 33. Price Tag: You have an array of numbers [10, 20, 30]. Use .map() to add a "$" string to the front of each one.
const prices = [10, 20, 30];
console.log(prices);
const priceTags = prices.map(price => "$" + price);
console.log(priceTags);

// 34. Add Five: Use .map() to take an array of ages and add 5 years to each person.
const ages = [5, 10, 15, 20];
console.log(ages);
const agedUp = ages.map(age => age + 5);
console.log(agedUp);

// 35. Square Roots: Use .map(Math.sqrt) on an array of numbers like [4, 9, 16] to find their square roots.
const multiples = [4, 9, 16];
console.log(multiples);
const roots = multiples.map(Math.sqrt);
console.log(roots);

// Exercise Set 8: Choosing with .filter()
// Goal: "Keeping" only the items that meet a certain rule.
// 36. Even Numbers Only: Start with [1, 2, 3, 4, 5, 6]. Use .filter() to keep only the numbers that are even.
const oddsAndEvens = [1, 2, 3, 4, 5, 6];
console.log(oddsAndEvens);
const evensOnly = oddsAndEvens.filter(num => num %2 === 0);
console.log(evensOnly);

// 37. High Scores: You have scores [50, 80, 95, 40, 100]. Use .filter() to keep only the scores above 75.
const scores = [50, 80, 95, 40, 100];
console.log(scores)
const highScores = scores.filter(score => score > 75);
console.log(highScores);

// 38. Short Words: Start with ["Apple", "Banana", "Kiwi", "Pear"]. Use .filter() to keep only words that have exactly 4 letters.
const words = ["Apple", "Banana", "Kiwi", "Pear"];
console.log(words);
const shortWords = words.filter(word => word.length === 4);
console.log(shortWords);

// 39. The "A" List: Create an array of names. Use .filter() to keep only the names that start with the letter "A".
const nameList = ["Alice", "Bob", "Andrew", "Charlie", "Amanda"];
console.log(nameList);
const aNames = nameList.filter(name => name.startsWith("A"));
console.log(aNames);

// 40. Is it Free? You have an array of prices [0, 10, 0, 25]. Use .filter() to keep only the items that cost 0.
const startingPrices = [0, 10, 0, 25];
console.log(startingPrices);
const freeItems = startingPrices.filter(price => price === 0);
console.log(freeItems);


// TIP: When using .map() and .filter(), don’t forget that these methods do not change the original array—they create a brand new one. Always save the result to a new variable:
// let bigNumbers = numbers.filter(n => n > 10);

