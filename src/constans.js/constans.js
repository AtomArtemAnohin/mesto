const popupEdit = document.querySelector('.popup_type_edit');
export const editForm = popupEdit.querySelector('.popup__form');
export const editButton = document.querySelector('.profile__button-edit-profile');
export const inputName = popupEdit.querySelector('.popup__input_type_title');
export const inputFeature = popupEdit.querySelector('.popup__input_type_image');
export const popupImage = document.querySelector('.popup_modal');
const popupAdd = document.querySelector('.popup_cards');
export const addForm = popupAdd.querySelector('.popup__form');
export const addButton = document.querySelector('.profile__button-add-element');

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'button_invalid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }; 

import Arhuz from '../images/arkhyz.jpg';
import Chelubinsk from '../images/chelyabinsk-oblast.jpg';
import Ivanovo from '../images/ivanovo.jpg';
import Kamchatka from '../images/kamchatka.jpg';
import Holmogorskii from '../images/kholmogorsky-rayon.jpg';
import Baikal from '../images/baikal.jpg';

export const initialCards = [
    {
        name: 'Архыз',
        link: Arhuz
    },
    {
        name: 'Челябинская область',
        link: Chelubinsk
    },
    {
        name: 'Иваново',
        link: Ivanovo
    },
    {
        name: 'Камчатка',
        link: Kamchatka
    },
    {
        name: 'Холмогорский район',
        link: Holmogorskii
    },
    {
        name: 'Байкал',
        link: Baikal
    }
];