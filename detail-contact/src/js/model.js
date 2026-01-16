import { renderFavoritesIcon } from "./views.js";
import { contactId } from "./script.js";
import {
  getContactsFromLocalStorage,
  setLocalStorage,
} from "../../../data/storage.js";

export function formatedDate(date) {
  const dateToRender = new Date(date);

  const dateString = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(dateToRender);

  return dateString;
}

export function isFavorited() {
  const contacts = getContactsFromLocalStorage();
  const userContact = contacts.find((contact) => contact.id === contactId);

  userContact.favorites = !userContact.favorites;

  const newContacts = contacts.map((contact) =>
    contact.id === userContact.id ? userContact : contact
  );

  setLocalStorage(newContacts);
  return renderFavoritesIcon(userContact);
}

export function toEditPage() {
  window.location.href = `/edit-contact/?id=${contactId}`;

  return;
}
