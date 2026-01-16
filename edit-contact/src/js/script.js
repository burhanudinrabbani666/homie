import { initialData } from "../../../src/js/data/data.js";
import {
  nameField,
  phoneField,
  emailField,
  companyField,
  birthdateField,
  streetField,
  subdistrictField,
  cityField,
  provinceField,
  countryField,
  zipCodeField,
  bgImageLinkField,
  photoProfileField,
  favoritesBtnEditElement,
} from "./dom.js";
import { renderFavoritedEdit } from "./views.js";

let isFavoritedEdit = false;
function editContact() {
  const query = window.location.search.split("=").splice(-1).join("");
  const contactID = Number(query);
  const contact = initialData.find((contact) => contact.id === contactID);
  const formatedDate = `${contact.birthDate.getFullYear()}-${contact.birthDate.getMonth() + 1}-${contact.birthDate.getDate()}`;

  nameField.value = contact.name;
  phoneField.value = contact.phone;
  emailField.value = contact.email;
  companyField.value = contact.company;
  birthdateField.value = formatedDate;
  streetField.value = contact.address.street;
  subdistrictField.value = contact.address.subdistrict;
  cityField.value = contact.address.city;
  provinceField.value = contact.address.province;
  countryField.value = contact.address.country;
  zipCodeField.value = contact.address.zipCode;
  bgImageLinkField.value = contact.backgroundLink;
  photoProfileField.value = contact.photoProfileLink;

  favoritesBtnEditElement.addEventListener("click", () => {
    isFavoritedEdit = !isFavoritedEdit;

    renderFavoritedEdit(isFavoritedEdit);
  });
}

editContact();
