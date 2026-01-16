import { initialData, initialLabels } from "./data/data.js";
import {
  menuBtn,
  renderContact,
  renderContactByLabels,
  renderLabels,
  renderResult,
} from "./views.js";

// Dom
export const tagsElement = document.querySelector(".nav__tags");
export const contactsElement = document.querySelector(
  ".main__container-contact"
);
function app(initialData) {
  renderLabels(initialData);
  renderContact(initialData);

  const getParams = new URLSearchParams(window.location.search).get("search");
  if (getParams) {
    renderResult(getParams);
  }

  contactsElement.addEventListener("click", menuBtn);
  window.addEventListener("hashchange", renderContactByLabels);
}

app(initialData, initialLabels);
