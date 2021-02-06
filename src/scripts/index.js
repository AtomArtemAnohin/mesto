import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initialCards.js';

const popupEdit = document.querySelector('.popup_type_edit');
const editForm = popupEdit.querySelector('.popup__form');
const editButton = document.querySelector('.profile__button-edit-profile');
const leadTitleNode = document.querySelector('.profile__user-name');
const leadSubtitleNode = document.querySelector('.profile__user-data');
const inputName = popupEdit.querySelector('.popup__input_type_title');
const inputFeature = popupEdit.querySelector('.popup__input_type_image');
export const popupImage = document.querySelector('.popup_modal');
const popupAdd = document.querySelector('.popup_cards');
const addForm = popupAdd.querySelector('.popup__form');
const newCardName = popupAdd.querySelector('.popup__input_type_place-name');
const newCardLink = popupAdd.querySelector('.popup__input_type_link');
const addButton = document.querySelector('.profile__button-add-element');
const cardList = document.querySelector('.cards-list');
const buttomSave = popupAdd.querySelector('.popup__button');

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'button_invalid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }; 

const editFormValidation = new FormValidator(validationConfig, editForm);
const addFormValidation = new FormValidator(validationConfig, addForm);
editFormValidation.enableValidation();
addFormValidation.enableValidation();

// открытие popup и добавление слушателей
export const openPopup = (popup) => {
    popup.classList.add('popup_visible');
    document.addEventListener('keydown', closeEsc);
    popup.addEventListener('click', closeBackground);
    
  };

// редактирование popupEdit
const editSavePopup = (evt) => {
    evt.preventDefault();
    leadTitleNode.textContent = inputName.value;
    leadSubtitleNode.textContent = inputFeature.value;
    
  };

// закрытие по Esc
const closeEsc = (evt, popup) => {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  };

//закрытие по backgorund
const closeBackground = (evt, popup) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('button')) {
      closePopup(popup);
    }
  };

// закрытие popup
const closePopup = (popup) => {
    popup = document.querySelector('.popup_visible')
  
    popup.classList.remove('popup_visible');
    document.removeEventListener('keydown', closeEsc);
    document.removeEventListener('click', closeBackground);
  };

// создание карточки
const createCard = (name, link) => {
    const cardElement = new Card(name, link, '.cards').generateCard();
    return cardElement;
  };

  // добавление карточек
const addCard = (container, cardElement) => {
    container.prepend(cardElement);
  };

// добавление новой карточки
const addNewCard = (evt) => {
    evt.preventDefault();
    addCard(cardList, createCard(newCardName.value, newCardLink.value));
    
    evt.target.reset();
  };

// открытие popupAdd 
addButton.addEventListener('click', () => {
  newCardName.value = "";
  newCardLink.value = "";
  addFormValidation.toggleButtonState(false);
  openPopup(popupAdd)
});
  
// открытие popupEdit
editButton.addEventListener('click', () => {
  inputName.value = leadTitleNode.textContent;
  inputFeature.value = leadSubtitleNode.textContent;
  editFormValidation.toggleButtonState(false);
  openPopup(popupEdit);
  });
  
popupEdit.addEventListener('submit', editSavePopup);
  
popupAdd.addEventListener('submit', addNewCard);
  
// рендер начальных карточек
initialCards.forEach((item) => {
    addCard(cardList, createCard(item.name, item.link));
}); 
