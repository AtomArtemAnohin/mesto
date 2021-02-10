import "./index.css";
import {
  editForm,
  editButton,
  inputName,
  inputFeature,
  addForm,
  addButton,
  validationConfig,
  initialCards
}
from '../constans.js/constans.js';

import Card from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const imagePopup = new PopupWithImage('.popup_modal')
const userData = new UserInfo('.profile__user-name', '.profile__user-data');

const editFormValidation = new FormValidator(validationConfig, editForm);
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(validationConfig, addForm);
addFormValidation.enableValidation();

function createCard(item) {
  return new Card(item, '.cards', {
    handleCardClick: () => {
      const data = {};
      data.src = item.link;
      data.textContent = item.name;
      imagePopup.open(data);
    }
  }).generateCard();
}

const cardsArray = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    cardsArray.addItem(cardElement);
  }
}, '.cards-list');

cardsArray.renderItems();

///

const popupAddCard = new PopupWithForm('.popup_cards', {
  handleFormSubmit: (item) => {
    const cardElement = createCard(item);
    cardsArray.addItem(cardElement);
  },
});

function openPopupAddCard() {
  popupAddCard.open();
  addFormValidation.checkValidity();
}

addButton.addEventListener('click', openPopupAddCard);

///

const popupEditProfile = new PopupWithForm('.popup_type_edit', {
  handleFormSubmit: (item) => {
    userData.setUserInfo({
      userName: item.name,
      userFeature: item.feature,
    });
  }
});

function openPopupEditProfile() {
  const newUser = userData.getUserInfo();
  inputName.value = newUser.name;
  inputFeature.value = newUser.feature;
  editFormValidation.checkValidity();
  popupEditProfile.open();
}

editButton.addEventListener('click', openPopupEditProfile);
