import { favoritesBtnElement } from "./dom.js";

export function renderFavorites(favorites) {
  favoritesBtnElement.innerHTML = `<ion-icon name="star${
    favorites ? "" : "-outline"
  }" style="${favorites ? "color: #FFD700" : ""}"></ion-icon>`;
}
