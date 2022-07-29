let passwordInput = document.querySelector("input[type='password']#password");
let passwordConfirmInput = document.querySelector("input[type='password']#confirm-password");

passwordInput.addEventListener('focusout', checkForSamePassword);
passwordConfirmInput.addEventListener('focusout', checkForSamePassword);


function checkForSamePassword(){
    if (passwordInput.value !== passwordConfirmInput.value){
        passwordConfirmInput.setCustomValidity("false");
        passwordConfirmInput.parentElement.classList.add("invalid");
        passwordConfirmInput.classList.add("red-border");
    } else {
        passwordConfirmInput.setCustomValidity("");
        passwordConfirmInput.parentElement.classList.remove("invalid");
        passwordConfirmInput.classList.remove("red-border");
    }
}

