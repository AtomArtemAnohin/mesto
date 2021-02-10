import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__image_modal');
    this._title = this._popup.querySelector('.popup__name_modal');
    this.setEventListeners();
  }

  open(data) {
    super.open();
    this._image.src = data.src;
    this._title.textContent = data.textContent;
  }
}