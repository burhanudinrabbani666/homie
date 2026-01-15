import { initialData } from "/src/js/data/data.js";
import { renderData, renderFavoritesIcon } from "./views.js";
import { favoritesBtnElement } from "./dom.js";
import { isFavorited } from "./model.js";

const contactID = window.location.search.split("=").slice(-1);
export const contact = initialData.find(
  (contact) => contact.id === Number(...contactID)
);

function renderContact() {
  renderFavoritesIcon(contact);
  renderData(contact);

  favoritesBtnElement.addEventListener("click", isFavorited);
}

renderContact();
