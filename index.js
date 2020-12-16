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
const editButtonCardsNode = document.querySelector('.profile__button-add-element');
const popupEditClose = document.querySelector('.popup__close');

const popupNode = document.querySelector('.popup');
const formNode = document.querySelector('.popup__form');

const leadSubtitleNode = document.querySelector('.profile__user-data');
const leadTitleNode = document.querySelector('.profile__user-name');
const formInputNameNode = document.querySelector('.popup__input_type_name');
const formInputJobNode = document.querySelector('.popup__input_type_job');
const formButtonNode = document.querySelector('.popup__button');



const popupNodeCards = document.querySelector('.popup_cards');
const popupCardsClose = document.querySelector('.popup__close_cards');

const conteinerCards = document.querySelector('.cards');
const formNodeCards = document.querySelector('.popup__form_card');

const popapModalNode = document.querySelector('.popup_modal');
const modalImage = document.querySelector('.popup__image_modal');
const modalName = document.querySelector('.popup__name_modal');
const modalPopupClose = document.querySelector('.popup__close_modal');
const inputCardName = document.querySelector('.popup__input_type_title');
const inputCardImage = document.querySelector('.popup__input_type_image');



function handleFormSubmit(event) {
    event.preventDefault();
    leadTitleNode.textContent = formInputNameNode.value;
    leadSubtitleNode.textContent = formInputJobNode.value;
    closePopup(popupNode);
}

function handleCardsSubmit(event) {
    event.preventDefault();
    const newCardTitle = inputCardName.value;
    const newCardImage = inputCardImage.value;
    const newCardItem = composeItem({ name: newCardTitle, link: newCardImage});
    conteinerCards.prepend(newCardItem);
    
    closePopup(popupNodeCards);
    
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

        openPopup(popapModalNode);
        
    });
    return newItem;
}


function openPopup(windowPopup){
    windowPopup.classList.add('popup_visible');
}
editButtonNode.addEventListener('click', function() {
    formInputNameNode.value = leadTitleNode.textContent;
    formInputJobNode.value = leadSubtitleNode.textContent;
    openPopup(popupNode);
});
editButtonCardsNode.addEventListener('click', function() {
    openPopup(popupNodeCards);
});


function closePopup(windowPopup){
    windowPopup.classList.remove('popup_visible');
}

popupEditClose.addEventListener('click', function() {
    popupNode.classList.remove('popup_visible'); 
});
formNode.addEventListener('submit', handleFormSubmit);

popupCardsClose.addEventListener('click', function() {
    popupNodeCards.classList.remove('popup_visible'); 
});
formNodeCards.addEventListener('submit', handleCardsSubmit);

modalPopupClose.addEventListener('click', function() {
    popapModalNode.classList.remove('popup_visible')

});

renderList();

