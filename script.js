function showPaymentPage() {
    // Redirect to the participation form page
    window.location.href = "Giveaway.html"; // replace with the actual file name/path if different
}

function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;

    // In a real-world scenario, you would also verify the payment here

    document.querySelector('.payment-page').classList.add('hidden');
    document.querySelector('.success-message').classList.remove('hidden');
}
