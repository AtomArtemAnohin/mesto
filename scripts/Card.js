import { popupImage, popupOpen } from './index.js';

export class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.cards__card').cloneNode(true);
    return cardElement;
  }

  _toggleLikeButton(evt) {
    evt.target.classList.toggle('button_active');
  }

  _deleteCard = () => {
    this._card.remove();
    this._card = null;
  }

  _openPrewiew = () => {
    const popupImageFig = popupImage.querySelector('.popup__image_modal');
    const popupImageCaption = popupImage.querySelector('.popup__name_modal');
    popupImageFig.src = this._link;
    popupImageFig.alt = this._name;
    popupImageCaption.textContent = this._name;
    popupOpen(popupImage);
  }

  _setEventListeners() {
    this._card.querySelector('.button_like').addEventListener('click', this._toggleLikeButton);
    this._card.querySelector('.button_trash').addEventListener('click', this._deleteCard);
    this._card.querySelector('.cards__card-img').addEventListener('click', this._openPrewiew);
  }

  generateCard() {
    this._card = this._getTemplate();
    const cardImage = this._card.querySelector('.cards__card-img');
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._card.querySelector('.cards__card-text').textContent = this._name;
    this._setEventListeners();
    return this._card;
  }
}