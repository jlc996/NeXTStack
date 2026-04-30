// camelCase for variables
let tasksCompleted = 0;

// Select all buttons
const allButtons = document.querySelectorAll('.toggle-btn');

// Loop through each button to add the listener
allButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Find the parent div with class 'task-item'
        const parentTask = this.parentElement;
        
        // Toggle the .completed class
        parentTask.classList.toggle('completed');

        // Logic to update the count
        if (parentTask.classList.contains('completed')) {
            tasksCompleted++;
            this.textContent = "Undo"; // Update button text
        } else {
            tasksCompleted--;
            this.textContent = "Finish";
        }

        // Output to the Console (The Flashlight!)
        console.log("Tasks currently completed: " + tasksCompleted);
    });
});
