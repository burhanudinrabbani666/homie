import { initialData } from "../../../src/js/data/data.js";

const contactNameElement = document.querySelector(".contact__name");
const contactPhoneElement = document.querySelector(".contact__phone");
const contactEmailElement = document.querySelector(".contact__email");
const contactCompanyElement = document.querySelector(".contact__company");
const contactBirthDateElement = document.querySelector(".contact__birthdate");
const contactAgeElement = document.querySelector(".contact__age");
const contactAddressElement = document.querySelector(".contact__address");
const contactLabelsElement = document.querySelector(".labels");
const contactCreatedElement = document.querySelector(".contact__date-created");
const contactBackgroundElement = document.querySelector(
  ".contact__image--background"
);
const contactProfileElement = document.querySelector(
  ".contact__image--profile"
);
const updatedAtELement = document.querySelector(".contact__updated-list");

function formatedDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function renderContact() {
  const contactID = window.location.search.split("=").slice(-1);
  const contact = initialData.find(
    (contact) => contact.id === Number(...contactID)
  );

  renderData(contact);
}

//  <li class="contact__updated-item">09 Desember 2014</li>

function renderData(contact) {
  const birthDate = formatedDate(contact.birthDate);
  const labels = renderLabael(contact);
  const createdAtText = formatedDate(contact.createdAt);
  const address = formatedAddress(contact);
  const updatedAtList = renderUpdatedList(contact).join("");

  contactNameElement.textContent = contact.name;
  contactPhoneElement.textContent = contact.phone;
  contactEmailElement.textContent = contact.email;
  contactCompanyElement.textContent = contact.company;
  contactBirthDateElement.textContent = birthDate;
  contactAgeElement.textContent = `${
    new Date().getFullYear() - contact.birthDate.getFullYear()
  } years old`;
  contactCreatedElement.textContent = createdAtText;
  contactAddressElement.textContent = address;
  contactBackgroundElement.style.backgroundImage = `url(${contact.backgroundLink})`;
  contactProfileElement.style.backgroundImage = `url(${contact.photoProfileLink})`;

  contactLabelsElement.innerHTML = labels.join("");
  updatedAtELement.innerHTML = updatedAtList;
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

renderContact();
