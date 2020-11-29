const editButtonNode = document.querySelector('.edit-button');
const popupNode = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const leadSubtitleNode = document.querySelector('.user-data');
const leadTitleNode = document.querySelector('.user-name');
const formNode = document.querySelector('.popup__form');
const formInputNameNode = document.querySelector('.popup__input_name');
const formInputJobNode = document.querySelector('.popup__input_job');
const formButtonNode = document.querySelector('.popup__button');

editButtonNode.addEventListener('click', togleleEditButtonClick);
popupClose.addEventListener('click', togleleEditButtonClick);

function togleleEditButtonClick() {
    popupNode.classList.toggle('popup__visible');
    formInputNameNode.value = leadTitleNode.textContent;
    formInputJobNode.value = leadSubtitleNode.textContent;
}


formNode.addEventListener('submit', handkeFormSubmit);

function handkeFormSubmit(event) {
    event.preventDefault();
    leadTitleNode.textContent = formInputNameNode.value;
    leadSubtitleNode.textContent = formInputJobNode.value;
}

