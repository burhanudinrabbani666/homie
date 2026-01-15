import { favoritesBtnElement, formElement } from "./dom.js";
import { isFavorited, addNewContact } from "./model.js";

function newContactForm() {
  favoritesBtnElement.addEventListener("click", isFavorited);
  formElement.addEventListener("submit", addNewContact);
}

newContactForm();
