import { favoritesBtnElement } from "./dom.js";
import { btnAddNewLabels, newLabelFields } from "./dom.js";

let openLabelFields = false;

export function renderFavorites(favorites) {
  favoritesBtnElement.innerHTML = `<ion-icon name="star${
    favorites ? "" : "-outline"
  }" style="${favorites ? "color: #FFD700" : ""}"></ion-icon>`;
}

export function addNewlabel() {
  newLabelFields.classList.toggle("hidden");

  openLabelFields = !openLabelFields;
  if (openLabelFields) btnAddNewLabels.textContent = "cancel";
  else btnAddNewLabels.textContent = `+ Add new label`;

  return;
}
