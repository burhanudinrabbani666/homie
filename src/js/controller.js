import { initialData } from "../../data/data.js";
import {
  getContactsFromLocalStorage,
  setLocalStorage,
} from "../../data/storage.js";
import {
  menuBtn,
  renderContact,
  renderFavorites,
  renderLabels,
  renderResult,
} from "./views.js";
import { contactsElement } from "./dom.js";

function app(initialData) {
  const contacts = getContactsFromLocalStorage();
  const favorites = window.location.search;
  renderLabels(contacts);

  if (favorites === "?favorites") {
    renderFavorites(contacts);

    return;
  }

  if (!contacts || contacts.length === 0) {
    setLocalStorage(initialData);
    window.location.reload();
  }

  renderContact(contacts);

  const getParams = new URLSearchParams(window.location.search).get("search");
  if (getParams) {
    renderResult(getParams, contacts);
  }

  contactsElement.addEventListener("click", menuBtn);
  window.addEventListener("hashchange", renderFavorites);
}

app(initialData);
