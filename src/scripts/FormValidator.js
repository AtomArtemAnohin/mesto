export class FormValidator {
  constructor(validationParams, formElement) {
    this._validationParams = validationParams;
    this._formElement = formElement;
    this._buttonSave = this._formElement.querySelector(this._validationParams.submitButtonSelector);
  }

  enableValidation() {
    this.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
   
    this.toggleButtonState(this._buttonSave, this._formElement.checkValidity());
  }

  _showError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.add(this._validationParams.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._validationParams.inputErrorClass);
  }

  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.remove(this._validationParams.errorClass);
    errorElement.textContent = "";
    inputElement.classList.remove(this._validationParams.inputErrorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    }
  }

  toggleButtonState(isValid) {
    if (isValid) {
      this._buttonSave.classList.remove(this._validationParams.inactiveButtonClass);
      this._buttonSave.disabled = false;
    } else {
      this._buttonSave.classList.add(this._validationParams.inactiveButtonClass);
      this._buttonSave.disabled = true;
    }
  }

  setEventListeners() {
    const inputList = this._formElement.querySelectorAll(
      this._validationParams.inputSelector
    );
    inputList.forEach((inputElement) => {
      if (inputElement.classList.contains('input')) {
        this._buttonToogle(inputElement, this._buttonSave);
        
      }
      inputElement.addEventListener("input", () => {
        this._buttonToogle(inputElement, this._buttonSave);
      });
    });
  }

  _buttonToogle(inputElement) {
    this._checkInputValidity(inputElement);
    this.toggleButtonState(this._formElement.checkValidity());
  }
}