const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const editButtonNode = document.querySelector('.profile__button-edit-profile');
const popupClose = document.querySelector('.popup__close');

const popupNode = document.querySelector('.popup');
const leadSubtitleNode = document.querySelector('.profile__user-data');
const leadTitleNode = document.querySelector('.profile__user-name');
const formNode = document.querySelector('.popup__form');
const formInputNameNode = document.querySelector('.popup__input_type_name');
const formInputJobNode = document.querySelector('.popup__input_type_job');
const formButtonNode = document.querySelector('.popup__button');

const editButtonCardsNode = document.querySelector('.profile__button-add-element');
const popupNodeCards = document.querySelector('.popup-cards');
const popupCardsClose = document.querySelector('.popup-cards__close');

const conteinerCards = document.querySelector('.cards');
const templateElement = document.querySelector('.cards');


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

function openEditButtonClic() {
    popupNodeCards.classList.add('popup-cards_visible');
    
}
function closeEditButtonClic() {
    popupNodeCards.classList.remove('popup-cards_visible');
}

function handleFormSubmi(event) {
    event.preventDefault();

    closeEditButtonClic();
}

function renderList() {
    const listItems = initialCards.map(composeItem);

    conteinerCards.append(...listItems);
}

function composeItem(item) {
    const newItem = templateElement.content.cloneNode(true)
    const cardsElement = newItem.querySelector('.cards__card-text');
    cardsElement.textContent = item.name;
    const urlelement = newItem.querySelector('.cards__card-img');
    urlelement.src = item.link;
    const altElement = newItem.querySelector(".cards__card-img");
    altElement.alt = 'Фото места';
    return newItem;
}

editButtonNode.addEventListener('click', openEditButtonClick);
popupClose.addEventListener('click', closeEditButtonClick);
formNode.addEventListener('submit', handleFormSubmit);

editButtonCardsNode.addEventListener('click', openEditButtonClic);
popupCardsClose.addEventListener('click', closeEditButtonClic);
popupNodeCards.addEventListener('submit', handleFormSubmi);
renderList();
