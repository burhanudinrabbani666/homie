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
export const contactId = Number(...query);

function renderContact() {
  const initialContacts = getContactsFromLocalStorage();
  console.log(initialContacts);
  const contact = initialContacts.find((contact) => contact.id === contactId);

  renderFavoritesIcon(contact);
  renderData(contact);

  favoritesBtnElement.addEventListener("click", isFavorited);
  editBtnElement.addEventListener("click", toEditPage);
  deleteBtnElement.addEventListener("click", (event) => {
    event.preventDefault();

    deleteContactFromInitial(contactId);
    const contact = initialContacts.find((contact) => contact.id === contactId);

    renderData(contact);
  });
}

renderContact();
