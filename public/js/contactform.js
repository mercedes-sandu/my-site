const contactForm = document.getElementById("contact-form");
let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = {
        name: fullname.value,
        email: email.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function() {
        console.log(xhr.responseText);
        if (xhr.responseText == "success") {
            alert("Email sent!");
            fullname.value = "";
            email.value = "";
            message.value = "";
        } else {
            alert("Something went wrong!");
        }
    }

    xhr.send(JSON.stringify(formData));
})