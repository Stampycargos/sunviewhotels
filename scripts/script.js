document.addEventListener('DOMContentLoaded', () => {
    console.log('Sunview Hotels scripts loaded!');

    const viewRoomsBtn = document.querySelector('.hero .btn');
    if (viewRoomsBtn) {
        viewRoomsBtn.addEventListener('click', (e) => {
            console.log('View Rooms button clicked!');
        });
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been sent. We will respond to ${email} shortly.`);
                contactForm.reset();
            } else {
                alert('Please fill in all required fields for the contact form.');
            }
        });
    }

    // New: Booking Form Submission Handler
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission

            const roomType = document.getElementById('room-type').value;
            const checkInDate = document.getElementById('check-in').value;
            const checkOutDate = document.getElementById('check-out').value;
            const guests = document.getElementById('guests').value;
            const fullName = document.getElementById('full-name').value;
            const emailBook = document.getElementById('email-book').value;

            if (roomType && checkInDate && checkOutDate && guests && fullName && emailBook) {
                // Basic date validation: ensure check-out is after check-in
                const inDate = new Date(checkInDate);
                const outDate = new Date(checkOutDate);

                if (outDate <= inDate) {
                    alert('Check-out date must be after check-in date.');
                    return; // Stop the function if dates are invalid
                }

                alert(`Booking Confirmed for ${fullName}!\nRoom Type: ${roomType}\nCheck-in: ${checkInDate}\nCheck-out: ${checkOutDate}\nGuests: ${guests}\n\nWe will send a confirmation email to ${emailBook}.`);
                // In a real application, you would send this data to a server for processing
                bookingForm.reset(); // Clear the form
            } else {
                alert('Please fill in all required booking details.');
            }
        });
    }

    // Set minimum dates for check-in/check-out based on current date
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');

    if (checkInInput) {
        checkInInput.min = today.toISOString().split('T')[0];
    }
    if (checkOutInput) {
        checkOutInput.min = tomorrow.toISOString().split('T')[0];
    }

    // Update check-out min date when check-in date changes
    if (checkInInput && checkOutInput) {
        checkInInput.addEventListener('change', () => {
            const selectedCheckIn = new Date(checkInInput.value);
            const minCheckOut = new Date(selectedCheckIn);
            minCheckOut.setDate(selectedCheckIn.getDate() + 1); // Check-out must be at least one day after check-in
            checkOutInput.min = minCheckOut.toISOString().split('T')[0];

            // If current check-out date is before new min, reset it
            if (new Date(checkOutInput.value) <= selectedCheckIn) {
                checkOutInput.value = minCheckOut.toISOString().split('T')[0];
            }
        });
    }

});