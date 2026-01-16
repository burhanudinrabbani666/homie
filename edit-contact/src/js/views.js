import { favoritesBtnEditElement } from "./dom.js";

export function renderFavoritedEdit(isFavoritedEdit) {
  favoritesBtnEditElement.innerHTML = `
  <ion-icon ${isFavoritedEdit ? "name='star'; style='color: #FFD700'" : "name='star-outline'"} ></ion-icon>
`;
}
