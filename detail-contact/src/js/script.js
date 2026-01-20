import { getContactsFromLocalStorage } from "../../../data/storage.js";
import { renderData, renderFavoritesIcon } from "./views.js";
import {
  favoritesBtnElement,
  editBtnElement,
  deleteBtnElement,
} from "./dom.js";
import { deleteContact, isFavorited, toEditPage } from "./model.js";
import { renderLabels } from "../../../src/js/views.js";

const query = window.location.search.split("=").slice(-1);
export const contactId = Number(...query);

function renderContact() {
  const contacts = getContactsFromLocalStorage();
  const contact = contacts.find((contact) => contact.id === contactId);

  renderLabels(contacts);
  renderFavoritesIcon(contact);
  renderData(contact);

  favoritesBtnElement.addEventListener("click", isFavorited);
  editBtnElement.addEventListener("click", toEditPage);
  deleteBtnElement.addEventListener("click", deleteContact);
}

renderContact();
