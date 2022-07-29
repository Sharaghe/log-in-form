let submitButton = document.querySelector("button.login");
const form = document.querySelector("form");
//form.noValidate = true;

//form.addEventListener('submit', validateForm);

let passwordInput = document.querySelector("input[type='password']#password");
let passwordConfirmInput = document.querySelector("input[type='password']#confirm-password");

passwordInput.addEventListener('focusout', checkForSamePassword);
passwordConfirmInput.addEventListener('focusout', checkForSamePassword);


function checkForSamePassword(){
    if (passwordInput.value !== passwordConfirmInput.value){
        passwordConfirmInput.setCustomValidity("false");
        passwordConfirmInput.parentElement.classList.add("invalid");
    } else {
        passwordConfirmInput.setCustomValidity("");
        passwordConfirmInput.parentElement.classList.remove("invalid");
    }
}

function validateForm(e){
    let form = e.target;

    if(form.checkValidity()){
        e.preventDefault();

    } else {
        e.preventDefault();

        Array.from(form.elements).forEach(i => {
            if(i.checkValidity()){
                i.parentElement.classList.remove("invalid");
                i.classList.remove("invalid");
                console.log("2");
            } else {
                i.parentElement.classList.add("invalid");
                i.classList.add("invalid");
            }
        })
    }

}