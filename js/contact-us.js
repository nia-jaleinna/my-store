
// Select the contact form and its elements
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");


// Add an event listener when the form is submitted
contactForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();


    // Get the values entered by the user
    const name = document.querySelector("#fullname").value.trim();

    const email = document.querySelector("#email").value.trim();

    const topic = document.querySelector("#topic").value;

    const message = document.querySelector("#message").value.trim();


    // Check if the required fields are valid
    if (!contactForm.checkValidity() || !name || !message) {

        contactForm.reportValidity();

        formStatus.textContent =
            "Please complete all required fields.";

        return;
    }


    // Create the email subject
    const subject = encodeURIComponent(
        "KalapaTEE - " + topic
    );


    // Create the email message
    const body = encodeURIComponent(

        "Name: " + name + "\n" +

        "Email: " + email + "\n" +

        "Topic: " + topic + "\n\n" +

        "Message:\n" + message

    );


    // Set the recipient's email address
    const recipient = "orders@examplewebsite142.com";


    // Build the mailto link
    const mailtoLink =
        "mailto:" + recipient +
        "?subject=" + subject +
        "&body=" + body;


    // Display a response on the webpage
    formStatus.textContent =
        "Your email application will open with your message ready to send.";


    // Open the user's email application
    window.location.href = mailtoLink;

});
