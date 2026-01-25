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
import { contactsElement, searchFieldsElement } from "./dom.js";

console.log(searchFieldsElement);
function app(initialData) {
  const contacts = getContactsFromLocalStorage();
  if (!contacts || contacts.length === 0) {
    setLocalStorage(initialData);
    window.location.reload();
  }

  const favorites = window.location.search;
  renderLabels(contacts);
  renderContact(contacts);
  contactsElement.addEventListener("click", menuBtn);

  if (favorites === "?favorites") {
    renderFavorites(contacts);
    return;
  }

  searchFieldsElement.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase().trim();
    const contactToSearcch = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query),
    );

    renderContact(contactToSearcch);
  });

  const getParams = new URLSearchParams(window.location.search).get("search");
  if (getParams) {
    renderResult(getParams, contacts);
  }
}

app(initialData);
