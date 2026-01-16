import { deleteContactFromInitial } from "../../../data/data.js";
import { getContactsFromLocalStorage } from "../../../data/storage.js";
import { renderData, renderFavoritesIcon } from "./views.js";
import {
  favoritesBtnElement,
  editBtnElement,
  deleteBtnElement,
} from "./dom.js";
import { isFavorited, toEditPage } from "./model.js";

const query = window.location.search.split("=").slice(-1);
export const contactID = Number(...query);

function renderContact() {
  const initialContacts = getContactsFromLocalStorage();
  const contact = initialContacts.find((contact) => contact.id === contactID);

  renderFavoritesIcon(contact);
  renderData(contact);

  favoritesBtnElement.addEventListener("click", isFavorited(contact));
  editBtnElement.addEventListener("click", toEditPage);
  deleteBtnElement.addEventListener("click", (event) => {
    event.preventDefault();

    deleteContactFromInitial(contactID);
    const contact = initialContacts.find((contact) => contact.id === contactID);

    renderData(contact);
  });
}

renderContact();
