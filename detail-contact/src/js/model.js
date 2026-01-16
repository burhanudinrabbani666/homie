import { renderFavoritesIcon } from "./views.js";
import { contactID } from "./script.js";

export function formatedDate(date) {
  const dateToRender = new Date(date);

  const dateString = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(dateToRender);

  return dateString;
}

export function isFavorited(contact) {
  contact.favorites = !contact.favorites;
  return renderFavoritesIcon(contact);
}

export function toEditPage() {
  window.location.href = `/edit-contact/?id=${contactID}`;

  return;
}
