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

const formNodeCards = document.querySelector('.popup-cards__form');
const formButtonCardsNode = document.querySelector('.popup-cards__button');

const inputCardName = document.querySelector('.popup-cards__input_type_title');
const inputCardImage = document.querySelector('.popup-cards__input_type_image');

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

function openCardsButtonClick() {
    popupNodeCards.classList.add('popup-cards_visible');
    
}
function closeCardsButtonClick() {
    popupNodeCards.classList.remove('popup-cards_visible');
}

function handleCardsSubmit(event) {
    event.preventDefault();
    const newCardTitle = inputCardName.value;
    const newCardImage = inputCardImage.value;
    const newCardItem = composeItem({ name: newCardTitle, link: newCardImage});
    conteinerCards.prepend(newCardItem);
    closeCardsButtonClick();
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

    return newItem;
}

function onLikeButton(like){
    like.classList.toggle("button_active");
}



editButtonNode.addEventListener('click', openEditButtonClick);
popupClose.addEventListener('click', closeEditButtonClick);
formNode.addEventListener('submit', handleFormSubmit);

editButtonCardsNode.addEventListener('click', openCardsButtonClick);
popupCardsClose.addEventListener('click', closeCardsButtonClick);
formNodeCards.addEventListener('submit', handleCardsSubmit);
renderList();

