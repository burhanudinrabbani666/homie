import { getContactsFromLocalStorage } from "../../data/storage.js";
import { renderLabels } from "../../src/js/views.js";
import { renderContactsLabelPage } from "./views.js";

function labelsPage() {
  const contacts = getContactsFromLocalStorage();
  const label = window.location.search.split("=").slice(-1).join("");

  renderLabels(contacts);
  renderContactsLabelPage(contacts, label);

  return;
}

labelsPage();
