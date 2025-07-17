document.addEventListener('DOMContentLoaded', () => {
    // Basic script for any future interactivity.
    // For now, it just logs a message to the console to confirm it's loaded.
    console.log('Sunview Hotels scripts loaded!');

    // Example of a simple interactive element (if you were to add one)
    const viewRoomsBtn = document.querySelector('.hero .btn');
    if (viewRoomsBtn) {
        viewRoomsBtn.addEventListener('click', (e) => {
            // e.preventDefault(); // Uncomment to prevent default link behavior if you handle navigation with JS
            console.log('View Rooms button clicked!');
            // You could add animations or dynamic content loading here
        });
    }

    // Example for contact form submission (client-side validation/message)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been sent. We will respond to ${email} shortly.`);
                // In a real application, you would send this data to a server
                contactForm.reset(); // Clear the form
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
});