import { initialData } from "../../../src/js/data/data.js";

const favoritesBtnElement = document.querySelector(".form__btn--favorites");
const formElement = document.querySelector(".form");

let favoritesValue = false;
function newContactForm() {
  favoritesBtnElement.addEventListener("click", () => {
    favoritesValue = !favoritesValue;

    renderFavorites(favoritesValue);
  });

  console.log(initialData.length + 1);
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("hello");

    const data = new FormData(formElement);

    const newContact = {
      id: initialData.length + 1,
      name: data.get("name").toString().trim(),
      phone: data.get("phone").toString().trim(),
      email: data.get("email").toString().trim(),
      labels: [
        {
          labelName: "family",
          color: "green",
        },
      ],
      birthDate: data.get("birthdate") ? new Date(data.get("birthdate")) : null,
      company: data.get("company").toString().trim() || null,
      address: {
        street: data.get("street").toString().trim() || null,
        subdistrict: data.get("subdistrict").toString().trim() || null,
        city: data.get("city").toString().trim() || null,
        province: data.get("province").toString().trim() || null,
        country: data.get("country").toString().trim() || null,
        zipCode: data.get("zipCode").toString().trim() || null,
      },
      createdAt: new Date(),
      updatedAt: [{ id: 1, date: new Date() }],
      deletedAt: null,
      favorites: favoritesValue,
      photoProfileLink: data.get("photoProfile").toString().trim() || null,
      backgroundLink: data.get("bgImageLink").toString().trim() || null,
    };

    console.log(newContact);
  });
}

newContactForm();

function renderFavorites(favorites) {
  favoritesBtnElement.innerHTML = `<ion-icon name="star${
    favorites ? "" : "-outline"
  }" style="${favorites ? "color: #FFD700" : ""}"></ion-icon>`;
}
