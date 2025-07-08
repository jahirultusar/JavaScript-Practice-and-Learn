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
