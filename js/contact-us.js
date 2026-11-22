
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Check required fields
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        // Get visitor information
        const name = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const topic = document.getElementById("topic").value;
        const message = document.getElementById("message").value.trim();

        // Prepare email subject
        const subject = encodeURIComponent("KalapaTEE - " + topic);

        // Prepare email body
        const body = encodeURIComponent(
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Topic: " + topic + "\n\n" +
            "Message:\n" + message
        );

        // Open visitor's default email application
        const mailtoLink =
            "mailto:?subject=" + subject +
            "&body=" + body;

        // Redirect to email application
        window.location.href = mailtoLink;

        // Display status
        document.getElementById("formStatus").textContent =
            "Opening your email application...";

    });

});
