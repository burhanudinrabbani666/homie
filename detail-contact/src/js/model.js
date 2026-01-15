import { renderFavoritesIcon } from "./views.js";
import { contact } from "./script.js";

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
