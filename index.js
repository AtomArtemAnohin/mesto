const editButtonNode = document.querySelector('.button__edit-profile');
const popupClose = document.querySelector('.popup__close');

const popupNode = document.querySelector('.popup');
const leadSubtitleNode = document.querySelector('.profile__info_user-data');
const leadTitleNode = document.querySelector('.profile__info_user-name');
const formNode = document.querySelector('.popup__form');
const formInputNameNode = document.querySelector('.popup__input_name');
const formInputJobNode = document.querySelector('.popup__input_job');
const formButtonNode = document.querySelector('.popup__button');

function openEditButtonClick() {
    popupNode.classList.add('popup_visible');
    formInputNameNode.value = leadTitleNode.textContent;
    formInputJobNode.value = leadSubtitleNode.textContent;
}

function closeEditButtonClick() {
    popupNode.classList.remove('popup_visible');
    formInputNameNode.value = leadTitleNode.textContent;
    formInputJobNode.value = leadSubtitleNode.textContent;
}

function handleFormSubmit(event) {
    event.preventDefault();
    leadTitleNode.textContent = formInputNameNode.value;
    leadSubtitleNode.textContent = formInputJobNode.value;
    popupNode.classList.remove('popup_visible');

}

editButtonNode.addEventListener('click', openEditButtonClick);
popupClose.addEventListener('click', closeEditButtonClick);
formNode.addEventListener('submit', handleFormSubmit);
