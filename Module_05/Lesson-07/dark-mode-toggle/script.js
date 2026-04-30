// 1. Select the button
const toggleBtn = document.querySelector('#theme-toggle');

// 2. Add the Event Listener
toggleBtn.addEventListener('click', () => {
  
  // 3. Use the .toggle() method on classList
  // This adds 'dark-theme' if it's missing, and removes it if it's there
  document.body.classList.toggle('dark-theme');

  // Bonus: Update the button text dynamically
  if (document.body.classList.contains('dark-theme')) {
    toggleBtn.textContent = "Switch to Light Mode";
  } else {
    toggleBtn.textContent = "Switch to Dark Mode";
  }
});
