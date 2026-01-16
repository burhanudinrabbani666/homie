import { getContactsFromLocalStorage } from "../../../data/storage.js";
import { renderLabels } from "../../../src/js/views.js";
import {
  btnAddNewLabels,
  favoritesBtnElement,
  formElement,
  newLabelFields,
} from "./dom.js";
import { isFavorited, addNewContact } from "./model.js";

let openLabelFields = false;
function newContactForm() {
  const contacts = getContactsFromLocalStorage();
  renderLabels(contacts);

  btnAddNewLabels.addEventListener("click", () => {
    newLabelFields.classList.toggle("hidden");

    openLabelFields = !openLabelFields;
    if (openLabelFields) btnAddNewLabels.textContent = "cancel";
    else btnAddNewLabels.textContent = `+ Add new label`;
  });
  favoritesBtnElement.addEventListener("click", isFavorited);
  formElement.addEventListener("submit", addNewContact);
}

newContactForm();
