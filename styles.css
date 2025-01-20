/* script.js */
window.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Chat interaction simulation
    const sendButton = document.getElementById('sendButton');
    const chatInput = document.getElementById('chatInput');
    const chatOutput = document.getElementById('chatOutput');

    sendButton.addEventListener('click', () => {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            const userBubble = document.createElement('p');
            userBubble.textContent = `You: ${userMessage}`;
            chatOutput.appendChild(userBubble);
            chatInput.value = '';
            setTimeout(() => {
                const botBubble = document.createElement('p');
                botBubble.textContent = 'ChatGPT: This is a simulated response.';
                chatOutput.appendChild(botBubble);
                chatOutput.scrollTop = chatOutput.scrollHeight;
            }, 1000);
        }
    });
});
