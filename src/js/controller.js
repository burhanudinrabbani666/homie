import { initialData, initialLabels } from "./data/data";
import { renderContact, renderLabels } from "./views";

// Dom
export const tagsElement = document.querySelector(".nav__tags");
export const contactsElement = document.querySelector(
  ".main__container-contact"
);

function app(initialData, initialLabels) {
  renderLabels(initialLabels);
  renderContact(initialData);
}

app(initialData, initialLabels);
