const editButtonNode = document.querySelector('.edit-button');
const popupNode = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

editButtonNode.addEventListener('click', handleEditButtonClick);
popupClose.addEventListener('click', handlepopupClose);

function handleEditButtonClick() {
    popupNode.classList.add('popup__visible');
}
function handlepopupClose() {
    popupNode.classList.remove('popup__visible');

}

