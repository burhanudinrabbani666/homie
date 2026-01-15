import { initialData, deleteContact } from "/src/js/data/data.js";
import { renderData, renderFavoritesIcon } from "./views.js";
import {
  favoritesBtnElement,
  editBtnElement,
  deleteBtnElement,
} from "./dom.js";
import { isFavorited, toEditPage } from "./model.js";

const query = window.location.search.split("=").slice(-1);
export const contactID = Number(...query);
export const contact = initialData.find((contact) => contact.id === contactID);

function renderContact() {
  renderFavoritesIcon(contact);
  renderData(contact);

  favoritesBtnElement.addEventListener("click", isFavorited);
  editBtnElement.addEventListener("click", toEditPage);
  deleteBtnElement.addEventListener("click", (event) => {
    event.preventDefault();

    const newIntialData = deleteContact(contactID);
    const contact = newIntialData.find((contact) => contact.id === contactID);

    renderData(contact);

    window.location.reload();
  });
}

renderContact();
