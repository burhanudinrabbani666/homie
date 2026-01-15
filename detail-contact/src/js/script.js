import { initialData } from "/src/js/data/data.js";
import { renderData } from "./views.js";
import { favoritesBtnElement } from "./dom.js";

function renderContact() {
  const contactID = window.location.search.split("=").slice(-1);
  const contact = initialData.find(
    (contact) => contact.id === Number(...contactID)
  );
  favoritesBtnElement.innerHTML = `<ion-icon name="star${contact.favorites ? "" : "-outline"}" style="${contact.favorites ? "color: #FFD700" : ""}"></ion-icon>`;
  renderData(contact);
}

renderContact();
