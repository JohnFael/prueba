document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^\+591 [67]\d{7}$/;

    if (emailPattern.test(emailOrPhone) || phonePattern.test(emailOrPhone)) {
        alert('Form submitted successfully!');
    } else {
        alert('Please enter a valid email or phone number.');
    }
});
