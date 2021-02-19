const popupEdit = document.querySelector('.popup_type_edit');
export const editForm = popupEdit.querySelector('.popup__form');
export const editButton = document.querySelector('.profile__button-edit-profile');
export const inputName = popupEdit.querySelector('.popup__input_type_title');
export const inputFeature = popupEdit.querySelector('.popup__input_type_image');
export const popupImage = document.querySelector('.popup_modal');
const popupAdd = document.querySelector('.popup_cards');
export const addForm = popupAdd.querySelector('.popup__form');
export const addButton = document.querySelector('.profile__button-add-element');
const popupAvatar = document.querySelector('.popup_edit-avatar');
export const avatarForm = popupAvatar.querySelector('.popup__form');
export const editAvatarButton = document.querySelector('.button_edit-avatar');

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'button_invalid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};