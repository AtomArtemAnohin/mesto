const editButtonNode = document.querySelector('.profile__button-edit-profile');
const popupClose = document.querySelector('.popup__close');

const popupNode = document.querySelector('.popup');
const leadSubtitleNode = document.querySelector('.profile__user-data');
const leadTitleNode = document.querySelector('.profile__user-name');
const formNode = document.querySelector('.popup__form');
const formInputNameNode = document.querySelector('.popup__input_type_name');
const formInputJobNode = document.querySelector('.popup__input_type_job');
const formButtonNode = document.querySelector('.popup__button');

function openEditButtonClick() {
    popupNode.classList.add('popup_visible');
    formInputNameNode.value = leadTitleNode.textContent;
    formInputJobNode.value = leadSubtitleNode.textContent;
}

function closeEditButtonClick() {
    popupNode.classList.remove('popup_visible');
}

function handleFormSubmit(event) {
    event.preventDefault();
    leadTitleNode.textContent = formInputNameNode.value;
    leadSubtitleNode.textContent = formInputJobNode.value;
    closeEditButtonClick();

}

editButtonNode.addEventListener('click', openEditButtonClick);
popupClose.addEventListener('click', closeEditButtonClick);
formNode.addEventListener('submit', handleFormSubmit);
