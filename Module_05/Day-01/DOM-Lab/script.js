// 1. SELECT the elements
const btn = document.querySelector('#action-btn');
const card = document.querySelector('#task-card');
const title = document.querySelector('#title');

// 2. LISTEN for the click
btn.addEventListener('click', () => {
    // 3. TOGGLE the class
    card.classList.toggle('activated');

    // 4. CHANGE the content
    if (card.classList.contains('activated')) {
        title.textContent = "Logic: ONLINE";
        console.log("Card is now active.");
    } else {
        title.textContent = "Logic: OFFLINE";
        console.log("Card is now inactive.");
    }
});

