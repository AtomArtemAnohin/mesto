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
const popupNodeCards = document.querySelector('.popup_cards');
const popupCardsClose = document.querySelector('.popup__close_cards');

const conteinerCards = document.querySelector('.cards');

const formNodeCards = document.querySelector('.popup__form_card');
const formButtonCardsNode = document.querySelector('.popup-cards__button');

const inputCardName = document.querySelector('.popup__input_type_title');
const inputCardImage = document.querySelector('.popup__input_type_image');

const popapModalNode = document.querySelector('.popup_modal');
const modalImage = document.querySelector('.popup-modal__image');
const modalName = document.querySelector('.popup-modal__name');
const modalPopupClose = document.querySelector('.popup__close_modal');




function handleFormSubmit(event) {
    event.preventDefault();
    leadTitleNode.textContent = formInputNameNode.value;
    leadSubtitleNode.textContent = formInputJobNode.value;
    closeEditButtonClick();
}

function handleCardsSubmit(event) {
    event.preventDefault();
    const newCardTitle = inputCardName.value;
    const newCardImage = inputCardImage.value;
    const newCardItem = composeItem({ name: newCardTitle, link: newCardImage});
    conteinerCards.prepend(newCardItem);
    closeCardsButtonClick();
}

function onLikeButton(like){
    like.classList.toggle("button_active");
}

function renderList() {
    const listItems = initialCards.map(composeItem);

    conteinerCards.append(...listItems);
}

function composeItem(item) {
    /* Создаем карточку */
    const newItem = conteinerCards.content.cloneNode(true)
    const cardsElement = newItem.querySelector('.cards__card-text');
    cardsElement.textContent = item.name;
    const urlelement = newItem.querySelector('.cards__card-img');
    urlelement.src = item.link;
    const altElement = newItem.querySelector(".cards__card-img");
    altElement.alt = 'Фото места'; 
    /* Лайк */
    let buttonLike = newItem.querySelector('.button_like');
    buttonLike.addEventListener('click', function(e) {
        onLikeButton(e.currentTarget);
    });
    /* Удоляем карточку */
    newItem.querySelector('.button_trash').addEventListener('click', function(e) {
        e.target.closest('.cards__card').remove();
    });
    /* Просмотр картинок поближе */
    urlelement.addEventListener('click' , function() {
        modalImage.src = urlelement.src;
        modalName.textContent = cardsElement.textContent;
        modalImage.alt = 'Картинка'

        openModalPopup();
        
    });
    return newItem;
}

function openEditButtonClick() {
    popupNode.classList.add('popup_visible');
    formInputNameNode.value = leadTitleNode.textContent;
    formInputJobNode.value = leadSubtitleNode.textContent;
}

function closeEditButtonClick() {
    popupNode.classList.remove('popup_visible');
}

function openCardsButtonClick() {
    popupNodeCards.classList.add('popup_visible');
    
}
function closeCardsButtonClick() {
    popupNodeCards.classList.remove('popup_visible');
}

function openModalPopup() {
    popapModalNode.classList.add('popup_modal_visible');
    
}
function closeModalPopup() {
    popapModalNode.classList.remove('popup_modal_visible');
}

editButtonNode.addEventListener('click', openEditButtonClick);
popupClose.addEventListener('click', closeEditButtonClick);
formNode.addEventListener('submit', handleFormSubmit);

editButtonCardsNode.addEventListener('click', openCardsButtonClick);
popupCardsClose.addEventListener('click', closeCardsButtonClick);
formNodeCards.addEventListener('submit', handleCardsSubmit);

modalPopupClose.addEventListener('click', closeModalPopup);
renderList();

