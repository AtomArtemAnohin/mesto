export default class Card {
  constructor(data, myId, cardSelector, { handleCardClick, handleDelClick, setLike, delLike }) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDelClick = handleDelClick;
    this._setLike = setLike;

    this._delLike = delLike;
    this._myId = myId;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.cards__card').cloneNode(true);
    return cardElement;
  }

  _likeCard(data) {
    this._likeButton.classList.add('button_active');
    this._setLike(data);
  }

  _removeLikeCard(data) {
    this._likeButton.classList.remove('button_active');
    this._delLike(data);
  }

  setLikes(data) {

    this._likes.textContent = data.likes.length;

  }

  remove() {
    this._deleteCard(this._card);
  }

  _deleteCard = (card) => {
    card.remove();
    card = null;
  }

  _checkOwner() {
    return this._ownerId == this._myId;
  }

  _checkLikeOwner() {
    this._data.likes.forEach((likeOwner) => {
      if (likeOwner._id === this._myId) {
        this._likeButton.classList.add('button_active');
      }
    });
  }

  generateCard() {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.cards__card-img');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._card.querySelector('.cards__card-text').textContent = this._name;
    this._likes = this._card.querySelector('.cards__like-counter');
    this._likeButton = this._card.querySelector('.button_like');
    this._deleteButton = this._card.querySelector('.button_trash');
    if (!this._checkOwner()) {
      this._deleteButton.classList.add('button_hidden');
    }
    this.setLikes(this._data);
    this._checkLikeOwner();
    this._setEventListeners();
    return this._card;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('button_active')) {
        this._removeLikeCard(this._data);
      } else {
        this._likeCard(this._data);
      }
    });
    this._deleteButton.addEventListener('click', () => { this._handleDelClick(this._data) });
    this._cardImage.addEventListener('click', () => { this._handleCardClick(this._data) });
  }
}