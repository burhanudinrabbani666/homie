import { renderFavoritesIcon } from "./views.js";
import { contact, contactID } from "./script.js";

export function formatedDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function isFavorited() {
  contact.favorites = !contact.favorites;
  return renderFavoritesIcon(contact);
}

export function toEditPage() {
  window.location.href = `/edit-contact/?id=${contactID}`;

  return;
}
