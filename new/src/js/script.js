const favoritesBtnElement = document.querySelector(".form__btn--favorites");
const  = document.querySelector(".form__btn--favorites");


let favorites = false;
function newContactForm() {
  favoritesBtnElement.addEventListener("click", () => {
    favorites = !favorites;

    renderFavorites(favorites);
  });


}

newContactForm();

function renderFavorites(favorites) {
  favoritesBtnElement.innerHTML = `<ion-icon name="star${
    favorites ? "" : "-outline"
  }" style="${favorites ? "color: #FFD700" : ""}"></ion-icon>`;
}
