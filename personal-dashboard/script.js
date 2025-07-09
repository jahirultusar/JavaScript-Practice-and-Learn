function updateClock() {
  const now = new Date(); // Get the current date and time
  const hours = String(now.getHours()).padStart(2, '0');   // Get hours, pad if single digit
  const minutes = String(now.getMinutes()).padStart(2, '0'); // Get minutes, pad if single digit
  const seconds = String(now.getSeconds()).padStart(2, '0'); // Get seconds, pad if single digit

  const currentTime = `${hours}:${minutes}:${seconds}`; // Format as HH:MM:SS

  const clockElement = document.getElementById('clock'); // Get the element from the page
  clockElement.textContent = currentTime; // Set its text to the current time
}

setInterval(updateClock, 1000); // Call updateClock every 1000ms (1 second)
updateClock(); // Run it immediately on page load

// Greeting based on time of day
function getTimeOfDay() {
  const now = new Date();
  const hours = now.getHours();

  if (hours < 12) return 'morning';
  if (hours < 18) return 'afternoon';
  return 'evening';
}

function updateGreeting() {
  const name = localStorage.getItem('name') || '';
  const timeOfDay = getTimeOfDay();
  const greeting = name ? `Good ${timeOfDay}, ${name}!` : `Good ${timeOfDay}, stranger!`;

  document.getElementById('greeting-text').textContent = greeting;
}

// Handle editing the name
const greetingText = document.getElementById('greeting-text');
const nameInput = document.getElementById('name-input');

greetingText.addEventListener('click', () => {
  nameInput.style.display = 'inline';
  greetingText.style.display = 'none';
  nameInput.value = '';
  nameInput.focus();
});

const saveNameBtn = document.getElementById('save-name-btn');

greetingText.addEventListener('click', () => {
  nameInput.style.display = 'inline';
  saveNameBtn.style.display = 'inline';
  greetingText.style.display = 'none';
  nameInput.value = '';
  nameInput.focus();
});

saveNameBtn.addEventListener('click', () => {
  const newName = nameInput.value.trim();
  if (newName) {
    localStorage.setItem('name', newName);
  }
  nameInput.style.display = 'none';
  saveNameBtn.style.display = 'none';
  greetingText.style.display = 'inline';
  updateGreeting();
});

updateGreeting();

