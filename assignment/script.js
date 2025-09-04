// ================================
// Part 1: Event Handling Example
// ================================

const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMsg = document.getElementById("welcomeMsg");

welcomeBtn.addEventListener("click", function() {
  welcomeMsg.textContent = "🎉 Welcome, Hibaq! Thanks for clicking!";
});


// ================================
// Part 2: Interactive Features
// ================================

// Light/Dark Mode Toggle
const modeToggle = document.getElementById("modeToggle");
let darkMode = false;

modeToggle.addEventListener("click", function() {
  if (!darkMode) {
    document.body.classList.add("dark");
    modeToggle.textContent = "Switch to Light Mode";
    darkMode = true;
  } else {
    document.body.classList.remove("dark");
    modeToggle.textContent = "Switch to Dark Mode";
    darkMode = false;
  }
});

// Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");
const countBtn = document.getElementById("countBtn");

countBtn.addEventListener("click", function() {
  count++;
  counterDisplay.textContent = count;
});


// ================================
// Part 3: Form Validation
// ================================

const form = document.getElementById("signupForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop auto submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Reset message
  message.textContent = "";
  message.style.color = "red";

  // Custom validation checks
  if (name === "" || email === "" || password === "") {
    message.textContent = "⚠️ All fields are required.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message.textContent = "⚠️ Please enter a valid email.";
    return;
  }

  if (password.length < 6) {
    message.textContent = "⚠️ Password must be at least 6 characters long.";
    return;
  }

  // If validation passes
  message.textContent = "✅ Registration successful!";
  message.style.color = "green";
});
