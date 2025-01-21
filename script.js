


/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contactForm');
    const chatInput = document.getElementById('chatInput');
    const chatOutput = document.getElementById('chatOutput');
    const sendButton = document.getElementById('sendButton');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your message has been sent!');
            contactForm.reset();
        });
    }

    if (chatInput && sendButton) {
        sendButton.addEventListener('click', () => {
            const message = chatInput.value.trim();
            if (message) {
                chatOutput.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
                chatInput.value = '';
            }
        });
    }
});
