const form = document.querySelector("#contact-form");
const responseMessage = document.querySelector("#response-message");
const responseMessageText = document.querySelector("#response-message-text");

form.addEventListener("submit", function (event) {
    
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    
    if (name == "" || email == "" || message == "") {
        responseMessageText.textContent = "All fields are required";
    } else {
        responseMessageText.textContent = "Thank you for your message!";
    }
    
    responseMessage.style.display = "block";
    
    setTimeout(function () {
        responseMessage.style.display = "none";
    }, 5000);
    event.preventDefault();
});
