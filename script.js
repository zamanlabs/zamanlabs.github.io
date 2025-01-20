// Example of interactive behavior with JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('.hero');
  heroSection.addEventListener('click', () => {
    alert('Welcome to ZAMAN Labs!');
  });
});
// Function to handle form submission
function sendMessage() {
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Simple validation (optional)
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  // Display confirmation message
  document.getElementById('confirmationMessage').style.display = 'block';

  // Clear form fields after submission
  document.getElementById('contactForm').reset();

  // Prevent form from actually submitting (no backend)
  return false;
}
