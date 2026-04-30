// 1. SELECTING ELEMENTS
const inputField = document.getElementById('itemInput');
const list = document.getElementById('shoppingList');

// Buttons
const addBtn = document.getElementById('addBtn');       // Uses .push()
const priorityBtn = document.getElementById('priorityBtn'); // Uses .unshift()
const removeFirstBtn = document.getElementById('removeFirstBtn'); // Uses .shift()
const removeLastBtn = document.getElementById('removeLastBtn'); // Uses .pop()

// 2. THE DATA
const studentItems = [];

// 3. LOGIC: ADD TO END (.push)
addBtn.addEventListener('click', () => {
    if (inputField.value !== "") {
        studentItems.push(inputField.value); // Adds to the back
        renderList();
        inputField.value = "";
    }
});

// 4. LOGIC: ADD TO FRONT (.unshift)
priorityBtn.addEventListener('click', () => {
    if (inputField.value !== "") {
        studentItems.unshift(inputField.value); // Adds to the very beginning
        renderList();
        inputField.value = "";
    }
});

// 5. LOGIC: REMOVE FIRST (.shift)
removeFirstBtn.addEventListener('click', () => {
    studentItems.shift(); // Removes index 0
    renderList();
});

// 6. LOGIC: REMOVE LAST (.pop)
removeLastBtn.addEventListener('click', () => {
    studentItems.pop(); // Removes the very last item
    renderList();
});

// 7. HELPER: RENDER LIST
// Since we don't have functions yet, your students can just 
// copy-paste the list-building logic, but here is a simple version:
function renderList() {
    list.innerHTML = ""; // Clear the screen
    // We use a basic loop or manual check to show the array
    studentItems.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
    console.log("Current Array:", studentItems);
    console.log("Array Length:", studentItems.length);
}
