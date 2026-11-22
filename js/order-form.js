
document.addEventListener("DOMContentLoaded", function () {

    const forms = document.querySelectorAll(".order-form");

    forms.forEach(function (form) {

        const price = Number(form.dataset.price);

        const quantityInput = form.querySelector("#quantity");
        const totalDisplay = form.querySelector(".total-price");

        const increaseButton = form.querySelector(".increase");
        const decreaseButton = form.querySelector(".decrease");

        // Calculate total price
        function updateTotal() {

            let quantity = Number(quantityInput.value);

            if (!Number.isInteger(quantity) || quantity < 1) {
                quantity = 1;
                quantityInput.value = 1;
            }

            if (quantity > 99) {
                quantity = 99;
                quantityInput.value = 99;
            }

            const total = price * quantity;

            totalDisplay.textContent = "₱" +
                total.toLocaleString("en-PH", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
        }

        // Increase quantity
        increaseButton.addEventListener("click", function () {
            const current = Number(quantityInput.value);

            if (current < 99) {
                quantityInput.value = current + 1;
            }

            updateTotal();
        });

        // Decrease quantity
        decreaseButton.addEventListener("click", function () {
            const current = Number(quantityInput.value);

            if (current > 1) {
                quantityInput.value = current - 1;
            }

            updateTotal();
        });

        quantityInput.addEventListener("input", updateTotal);

        // Submit order
        form.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            const product = form.dataset.product;
            const size = form.querySelector("#size").value;
            const quantity = Number(quantityInput.value);

            const name = form.querySelector("#customerName").value.trim();
            const email = form.querySelector("#customerEmail").value.trim();
            const phone = form.querySelector("#customerPhone").value.trim();
            const address = form.querySelector("#customerAddress").value.trim();

            const total = price * quantity;

            // Email subject
            const subject = encodeURIComponent(
                "KalapaTEE Order - " + product
            );

            // Email message
            const body = encodeURIComponent(
                "KALAPATEE ORDER DETAILS\n\n" +

                "Product: " + product + "\n" +
                "Price: ₱" + price.toFixed(2) + "\n" +
                "Size: " + size + "\n" +
                "Quantity: " + quantity + "\n" +
                "Total: ₱" + total.toFixed(2) + "\n\n" +

                "CUSTOMER INFORMATION\n\n" +
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Contact Number: " + phone + "\n" +
                "Delivery Address: " + address + "\n\n" +

                "Thank you for choosing KalapaTEE!"
            );

            // Recipient for product orders
            const recipient = "orders@examplewebsite142.com";

            const mailtoLink =
                "mailto:" + recipient +
                "?subject=" + subject +
                "&body=" + body;

            const status = form.querySelector(".form-status");

            status.textContent =
                "Opening your email application. Please send your order there.";

            // Open visitor's default email application
            window.location.href = mailtoLink;

        });

        // Initial total
        updateTotal();

    });

});
