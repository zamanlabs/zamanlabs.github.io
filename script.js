document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting Zaman Labs! We will get back to you soon.');
    this.reset();
});
