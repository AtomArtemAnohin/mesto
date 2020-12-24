const formAdd = document.querySelector(".popup__form_card");




function showError(form, input) {
    const error = form.querySelector(`#${input.id}-error`)
    error.textContent = input.validationMessage;
    input.classList.add('popup__input_type_error');
};
function hideError(form, input) {
    const error = form.querySelector(`#${input.id}-error`)
    error.textContent = "";
    input.classList.remove('popup__input_type_error');
};
function chekInputValidity(form, input) {
    if(input.validity.valid){
        hideError(form, input);
        } else {
        showError(form, input)
        }
}
function setButtonState(button, isActive){
    if(isActive){
        button.classList.remove('button_invalid');
        button.disabled = false;
    } else {
        button.classList.add("button_invalid");
        button.disabled = "disabled";
    }
}

function setEventListener(form) {
const inputList = form.querySelectorAll(".popup__input");
const submitButton = form.querySelector(".popup__button");

inputList.forEach(input => {
    input.addEventListener('input', (evt) => {
        chekInputValidity(form, input);
        setButtonState(submitButton, form.checkValidity())
})
});

}
function enableValidation(){
    const forms = document.querySelectorAll('.popup__form');
    forms.forEach(form => {
        setEventListener(form)

        form.addEventListener('submit', (evt)=> {
            evt.preventDefault();
            console.log("форма отправлена")
        });

        const submitButton = form.querySelector('.popup__button');
        setButtonState(submitButton, form.checkValidity())
    });
}
enableValidation();