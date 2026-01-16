import {
  contactAddressElement,
  contactAgeElement,
  contactBackgroundElement,
  contactBirthDateElement,
  contactCompanyElement,
  contactCreatedElement,
  contactEmailElement,
  contactLabelsElement,
  contactNameElement,
  contactPhoneElement,
  contactProfileElement,
  updatedAtELement,
  contactDetailContainerElement,
  favoritesBtnElement,
} from "./dom.js";
import { formatedDate } from "./model.js";

export function renderData(contact) {
  if (!contact) {
    contactDetailContainerElement.innerHTML = `<div class="detail__contact--not-found">Contact Not Found</div>`;

    return;
  }

  const birthDate = formatedDate(contact.birthDate);
  const labels = renderLabael(contact).join("");
  const createdAtText = formatedDate(contact.createdAt);
  const address = formatedAddress(contact);
  const updatedAtList = renderUpdatedList(contact).join("");
  const age =
    new Date().getFullYear() - new Date(contact.birthDate).getFullYear();

  contactNameElement.textContent = contact.name;
  contactPhoneElement.textContent = contact.phone;
  contactEmailElement.textContent = contact.email;
  contactCompanyElement.textContent = contact.company;
  contactBirthDateElement.textContent = birthDate || "";
  contactAgeElement.textContent = `${age} years old`;
  contactCreatedElement.textContent = createdAtText;
  contactAddressElement.textContent = address;
  contactBackgroundElement.style.backgroundImage = `url(${contact.backgroundLink})`;
  contactProfileElement.style.backgroundImage = `url(${contact.photoProfileLink})`;

  contactLabelsElement.innerHTML = labels;
  updatedAtELement.innerHTML = updatedAtList;

  return;
}

function renderLabael(contact) {
  return contact.labels.map((label) => {
    return ` 
        <span class="contact__label tag label-color-${label.color}">${label.labelName}</span>
    `;
  });
}

function formatedAddress(contact) {
  return `${contact.address.street}, ${contact.address.subdistrict}, ${contact.address.city}, ${contact.address.province} ${contact.address.zipCode}, ${contact.address.country}`;
}

function renderUpdatedList(contact) {
  return contact.updatedAt.map(
    (list) =>
      `<li class="contact__updated-item">${formatedDate(list.date)}</li>`
  );
}

export function renderFavoritesIcon(contact) {
  favoritesBtnElement.innerHTML = `<ion-icon name="star${contact.favorites ? "" : "-outline"}" style="${contact.favorites ? "color: #FFD700" : ""}"></ion-icon>`;

  return;
}
