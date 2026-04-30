// Game State
let health = 200;
let slimeHealth = 200;

// The main game logic
function playTurn() {
    if (health <= 0) return;

    // Calculate Damage: 0 to 20
    let damage = Math.floor(Math.random() * 21);
    let slimeDamage = Math.floor(Math.random() * 21);

    // Update variable
    health -= damage; // Same as health = health - damage
    slimeHealth -= slimeDamage

    // Select UI elements
    const hpDisplay = document.getElementById("hp-display");
    const messageDisplay = document.getElementById("message");

    const slimeHpDisplay = document.getElementById("slime-hp-display");
    const slimeMessageDisplay = document.getElementById("slime-message");

    // Update the UI
    hpDisplay.innerText = health;
    slimeHpDisplay.innerText = slimeHealth;

    if (health <= 0) {
        hpDisplay.innerText = "0";
        messageDisplay.innerText = "Game Over! The slime won.";
        hpDisplay.classList.add("danger");
    } else {
        messageDisplay.innerText = "The slime dealt " + damage + " damage!";
        if (health < 30) {
            hpDisplay.classList.add("danger");
        }
    }

    if (slimeHealth <= 0) {
        slimeHpDisplay.innerText = "0";
        slimeMessageDisplay.innerText = "You Won! The slime is dead.";
    } else {
        slimeMessageDisplay.innerText = "You dealt " + damage + " damage!";
        if (health < 30) {
            slimeHpDisplay.classList.add("danger");
        }
    }
}

function healTurn() {
    if (health <= 0) return;

    // Calculate Damage: 0 to 20
    let heal = Math.floor(Math.random() * 21);
    let damage = Math.floor(Math.random() * 21);

    // Update variable
    health += heal; // Same as health = health + heal
    health -= damage;

    // Select UI elements
    const hpDisplay = document.getElementById("hp-display");
    const messageDisplay = document.getElementById("message");
    const slimeMessageDisplay = document.getElementById("slime-message");

    // Update the UI
    hpDisplay.innerText = health;

    if (health <= 0) {
        hpDisplay.innerText = "0";
        messageDisplay.innerText = "Game Over! The slime won.";
        hpDisplay.classList.add("danger");
    } else {
        messageDisplay.innerText = "You healed for " + heal + " points!";
        if (health < 30) {
            hpDisplay.classList.add("danger");
        }
    }

    slimeMessageDisplay.innerText = "You took " + damage + " damage!";
}

function resetGame() {
    health = 200;
    document.getElementById("hp-display").innerText = health;
    document.getElementById("hp-display").classList.remove("danger");
    document.getElementById("message").innerText = "A new slime appears...";

    slimeHealth = 200;
    document.getElementById("slime-hp-display").innerText = slimeHealth;
    document.getElementById("slime-hp-display").classList.remove("danger");
    document.getElementById("slime-message").innerText = "Get ready!";
}

