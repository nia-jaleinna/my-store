
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get the values entered by the visitor
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const topic = document.getElementById("topic").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check that all fields are filled in
        if (!fullname || !email || !topic || !message) {
            formStatus.textContent = "Please complete all fields.";
            return;
        }

        // Email recipient
        const recipient = "hello@examplewebsite142.com";

        // Email subject
        const subject = "Contact Us - " + topic;

        // Email message
        const body =
            "Name: " + fullname + "\n" +
            "Email: " + email + "\n" +
            "Topic: " + topic + "\n\n" +
            "Message:\n" + message;

        // Create the mailto link
        const mailtoLink =
            "mailto:" + recipient +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        // Open the visitor's default email application
        window.location.href = mailtoLink;

        formStatus.textContent =
            "Your email app should open with your message ready to send.";
    });

});
