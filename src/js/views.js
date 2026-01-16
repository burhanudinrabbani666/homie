import { contactsAmount, contactsElement, labelsElement } from "./dom.js";
import { deleteContactFromInitial, isFavorited } from "../../data/data.js";
import { getContactsFromLocalStorage } from "../../data/storage.js";

export function renderLabels(contacts, queryLabel) {
  const labelsArray = contacts.flatMap((contact) => contact.labels);
  const labelJson = new Set(labelsArray.map((label) => JSON.stringify(label)));
  const labels = Array.from(labelJson).map((labelUnique) =>
    JSON.parse(labelUnique)
  );

  const tagHtml = labels.map((label) => {
    const labelBackgrounColor =
      label.labelName === queryLabel ? `label-color-${label.color}` : ``;

    return `
      <li>
        <a class="nav__main-item ${labelBackgrounColor}" href="/labels/?label=${label.labelName.toLowerCase()}"
          ><div class="nav__item-color label-color-${label.color}"></div>
          <span class="nav__item-label">${label.labelName.replace(
            label.labelName[0],
            label.labelName[0].toUpperCase()
          )}</span></a
        >
      </li>

    `;
  });

  return (labelsElement.innerHTML = tagHtml.join(""));
}

export function renderContact(initialData) {
  const html = initialData.map((contact) => {
    return `
     <li class="contact-list grid-4-col">
       <p class="contact-name">${contact.name}</p>
       <p class="contact-phone"> ${contact.phone}</p>
       <p class="contact-email">${contact.email}</p>
       <div class="tags">
        ${contact.labels
          .map((label) => {
            return `
          <div class="tag label-color-${label.color}">${label.labelName}</div>
          `;
          })
          .join("")}
       </div>
       <button class="menu-btn" data-id=${contact.id}>
          <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
       </button>
       <div class="menu hidden menu-${contact.id}" data-id=${contact.id}>
         <a href="/detail-contact/?id=${contact.id}" class="menu-item">
           <ion-icon name="eye-outline"></ion-icon>
           <span>View Detail</span>
         </a>
         <button class="menu-item favorite-btn ${
           contact.favorites ? "favorites" : ""
         }" data-id=${contact.id}>
           <ion-icon name="star${
             contact.favorites ? "" : "-outline"
           }"></ion-icon>
           <span>Favorites</span>
         </button>
         <a href="/edit-contact/?id=${contact.id}" class="menu-item">
             <ion-icon name="pencil-outline"></ion-icon>
           <span>Edit Contact</span>
         </a>
         <button class="menu-item delete-btn" data-id=${contact.id}>
           <ion-icon name="trash-outline"></ion-icon>
           <span>Delete</span>
         </button>
       </div>
     </li>

    `;
  });

  contactsAmount.innerHTML = initialData.length;
  contactsElement.innerHTML = html.join("");
}

export function renderResult(getParams, initialContact) {
  const resultSearch = initialContact.filter((contact) =>
    contact.name.toLowerCase().includes(getParams.toLowerCase())
  );

  renderContact(resultSearch);
  return;
}

export function renderFavorites(contacts) {
  const favoritedContact = contacts.filter(
    (contact) => contact.favorites === true
  );

  renderContact(favoritedContact);
  return;
}

export function menuBtn() {
  const initialContact = getContactsFromLocalStorage();

  const menuBtn = event.target.closest(".menu-btn");
  const deleteBtn = event.target.closest(".delete-btn");
  const favoriteBtn = event.target.closest(".favorite-btn");

  if (menuBtn) {
    const menuElement = document.querySelector(`.menu-${menuBtn.dataset.id}`);
    menuElement.classList.toggle("hidden");
  }

  if (deleteBtn) {
    const dataId = Number(deleteBtn.dataset.id);
    const newContacts = deleteContactFromInitial(dataId, initialContact);

    renderContact(newContacts);
    return;
  }

  if (favoriteBtn) {
    const dataId = Number(favoriteBtn.dataset.id);
    const newIntialData = isFavorited(dataId, initialContact);

    renderContact(newIntialData);
    return;
  }
}
