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

function formatedDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function renderContact() {
  const contactID = window.location.search.split("=").slice(-1);
  console.log(...contactID);
  const contact = initialData.find(
    (contact) => contact.id === Number(...contactID)
  );

  const birthDate = formatedDate(contact.birthDate);

  const labels = contact.labels.map((label) => {
    return ` 
        <span class="contact__label tag label-color-${label.color}">${label.labelName}</span>
    `;
  });

  const createdAtText = formatedDate(contact.createdAt);

  contactNameElement.textContent = contact.name;
  contactPhoneElement.textContent = contact.phone;
  contactEmailElement.textContent = contact.email;
  contactCompanyElement.textContent = contact.company;
  contactBirthDateElement.textContent = birthDate;
  contactAgeElement.textContent = `${
    new Date().getFullYear() - contact.birthDate.getFullYear()
  } years old`;
  contactCreatedElement.textContent = createdAtText;
  // contactAddressElement.textContent = contact.address;
  contactLabelsElement.innerHTML = labels.join("");
  contactBackgroundElement.style.backgroundImage = `url(${contact.backgroundLink})`;
  contactProfileElement.style.backgroundImage = `url(${contact.photoProfileLink})`;
}

renderContact();
