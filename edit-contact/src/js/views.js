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

export function renderFavoritedEdit(isFavoritedEdit) {
  favoritesBtnEditElement.innerHTML = `
  <ion-icon ${isFavoritedEdit ? "name='star'; style='color: #FFD700'" : "name='star-outline'"} ></ion-icon>
`;
}

export function renderContactToEdit(contact) {
  const birthDate = new Date(contact.birthDate);
  const formatedDate = `${birthDate.getFullYear()}-${(birthDate.getMonth() + 1).toString().padStart(2, 0)}-${birthDate.getDate().toString().padStart(2, 0)}`;

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
}
