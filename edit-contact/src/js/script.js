import { getContactsFromLocalStorage } from "../../../data/storage.js";
import { renderLabels } from "../../../src/js/views.js";
import { favoritesBtnEditElement, formBtnEditElement } from "./dom.js";
import { editContactSubmit } from "./model.js";
import { renderContactToEdit, renderFavoritedEdit } from "./views.js";

export let isFavoritedEdit = false;
function editContactPages() {
  const contacts = getContactsFromLocalStorage();
  const query = window.location.search.split("=").splice(-1).join("");
  const contactId = Number(query);

  renderLabels(contacts);

  const contact = contacts.find((contact) => contact.id === contactId);
  isFavoritedEdit = contact.favorites;
  renderFavoritedEdit(isFavoritedEdit);
  renderContactToEdit(contact);

  favoritesBtnEditElement.addEventListener("click", () => {
    isFavoritedEdit = !isFavoritedEdit;
    renderFavoritedEdit(isFavoritedEdit);
  });

  formBtnEditElement.addEventListener("submit", editContactSubmit);
}

editContactPages();
