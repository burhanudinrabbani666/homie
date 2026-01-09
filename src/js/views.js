import { contactsElement, tagsElement } from "./controller";

export function renderLabels(labels) {
  const tagHtml = labels.map((label) => {
    return `
      <li>
        <a class="nav__main-item" href="#${label.labelName.toLowerCase()}"
          ><div class="item-color label-color-${label.color}"></div>
          <span class="item-label">${label.labelName.replace(
            label.labelName[0],
            label.labelName[0].toUpperCase()
          )}</span></a
        >
      </li>

    `;
  });

  return (tagsElement.innerHTML = tagHtml.join(""));
}

export function renderContact(initialData) {
  const html = initialData.map((contact) => {
    return `
     <li class="contact-list grid-4-col ${
       contact.favorites ? "favorites" : ""
     }">
       <div class="name">
         <div class="img"></div>
         <p>${contact.name}</p>
       </div>
       <p> ${contact.phone}</p>
       <p>${contact.email}</p>
       <div class="tags">
         <div class="tag label-color-red">work</div>
         <div class="tag label-color-green">Family</div>
       </div>
       <button class="menu-btn" data-id=${contact.id}>X</button>
       <div class="menu hidden menu-${contact.id}" data-id=${contact.id}>
         <a href="#" class="menu-item">
           <ion-icon name="eye-outline"></ion-icon>
           <span>View Detail</span>
         </a>
         <button class="menu-item favorite-btn" data-id=${contact.id}>
           <ion-icon name="star-outline"></ion-icon>
           <span>Favorites</span>
         </button>
         <button class="menu-item">
           <ion-icon name="pencil-outline"></ion-icon>
           <span>Edit Contact</span>
         </button>
         <button class="menu-item delete-btn" data-id=${contact.id}>
           <ion-icon name="trash-outline"></ion-icon>
           <span>Delete</span>
         </button>
       </div>
     </li>

    `;
  });

  contactsElement.innerHTML = html.join("");
}
