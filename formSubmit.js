document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const utr = document.getElementById("utr").value;

    // Create message with all fields
    const message = `New Participation:\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nUTR Number: ${utr}`;

    const token = "6731876803:AAFEo0GlfZQaVBZcZKKBxFP1RKjGqW3jujo";
    const chat_id = "6178445135";

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            // Redirect to the success page
            window.location.href = "success.html";
        } else {
            alert("𝐅𝐀𝐈𝐋𝐄𝐃 𝐓𝐎 𝐏𝐀𝐑𝐓𝐈𝐂𝐈𝐏𝐀𝐓𝐄");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("𝐅𝐀𝐈𝐋𝐄𝐃 𝐓𝐎 𝐏𝐀𝐑𝐓𝐈𝐂𝐈𝐏𝐀𝐓𝐄");
    });
});
