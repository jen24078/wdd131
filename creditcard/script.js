document.getElementById('creditCardForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const cardNumber = document.getElementById('cardNumber').value.replace(/\s+/g, '');
    const month = parseInt(document.getElementById('month').value, 10);
    const year = parseInt(document.getElementById('year').value, 10);
    const feedback = document.getElementById('feedback');
    
    feedback.className = 'feedback-message error';
    
    if (cardNumber !== '1234123412341234') {
        feedback.textContent = 'Invalid card number. Must be exactly 1234123412341234.';
        return;
    }

    if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
        feedback.textContent = 'Please enter a valid month (01-12) and year.';
        return;
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1; 
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        feedback.textContent = 'This credit card is expired.';
        return;
    }

    feedback.className = 'feedback-message success';
    feedback.textContent = 'Success! Your payment has been approved.';
});