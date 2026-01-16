import { getContactsFromLocalStorage } from "../../data/storage.js";
import { contactsElement } from "../../src/js/dom.js";
import { menuBtn, renderLabels } from "../../src/js/views.js";
import { renderContactsLabelPage } from "./views.js";

function labelsPage() {
  const contacts = getContactsFromLocalStorage();
  const label = window.location.search.split("=").slice(-1).join("");

  renderLabels(contacts, label);
  renderContactsLabelPage(contacts, label);

  contactsElement.addEventListener("click", menuBtn);
  return;
}

labelsPage();
