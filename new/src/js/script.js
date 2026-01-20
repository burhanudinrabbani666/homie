import { getContactsFromLocalStorage } from "../../../data/storage.js";
import { renderLabels } from "../../../src/js/views.js";
import { btnAddNewLabels, favoritesBtnElement, formElement } from "./dom.js";
import { isFavorited, addNewContact } from "./model.js";
import { addNewlabel, renderLabelsForInput } from "./views.js";

function newContactForm() {
  const contacts = getContactsFromLocalStorage();
  renderLabels(contacts);
  renderLabelsForInput(contacts);

  btnAddNewLabels.addEventListener("click", addNewlabel);
  favoritesBtnElement.addEventListener("click", isFavorited);
  formElement.addEventListener("submit", addNewContact);
}

newContactForm();
