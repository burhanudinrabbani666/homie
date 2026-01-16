import { initialData } from "../../data/data.js";
import { setLocalStorage } from "../../data/storage.js";
import {
  menuBtn,
  renderContact,
  renderContactByLabels,
  renderLabels,
  renderResult,
} from "./views.js";
import { contactsElement } from "./dom.js";

function app(initialData) {
  const initialContact = JSON.parse(localStorage.getItem("contact"));

  if (!initialContact || initialContact.length === 0) {
    setLocalStorage(initialData);
  }

  renderLabels(initialContact);
  renderContact(initialContact);

  const getParams = new URLSearchParams(window.location.search).get("search");
  if (getParams) {
    renderResult(getParams, initialContact);
  }

  contactsElement.addEventListener("click", menuBtn);
  window.addEventListener("hashchange", renderContactByLabels);
}

app(initialData);
