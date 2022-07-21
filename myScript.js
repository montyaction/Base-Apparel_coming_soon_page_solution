const submit = document.querySelector(".submit-btn");
const inputField = document.querySelector("input");
const errorMessage = document.querySelector(".error-mgs");
const errorIcon = document.querySelector(".icon");
const form = document.querySelector(".form-content");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submit.addEventListener("click", (e) => {
    const emailAddress = inputField.value;
    console.log(emailAddress);
    if (emailAddress === "") {
        errorIcon.style.opacity = "1";
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Whoops! It looks you forget to add your email";
        form.style.border = "2px solid hsl(0, 93%, 68%)";

    } else if (!emailAddress.match(emailRegex)) {

        errorIcon.style.opacity = "1";
        errorMessage.style.display = "block";
        errorMessage.innerHTML =
          "Please provide a valid email";
        form.style.border = "2px solid hsl(0, 93%, 68%)";
        
    } else {

        errorIcon.style.opacity = "0";
        errorMessage.style.display = "none";
        form.style.border = "1px solid hsla(0, 6%, 24%, 0.2)";
        inputField.value = "";
    }
    e.preventDefault();
});