import { initialData, initialLabels } from "./data/data";
import { renderContact, renderLabels } from "./views";

// Dom
export const tagsElement = document.querySelector(".nav__tags");
export const contactsElement = document.querySelector(
  ".main__container-contact"
);

function app(initialData, initialLabels) {
  renderLabels(initialLabels);
  renderContact(initialData);

  const contactListElement = document.querySelectorAll(".contact-list");
  console.log(contactListElement);

  contactListElement.forEach((contact) => {
    contact.addEventListener("click", (event) => {
      const menuBtn = event.target.closest(".menu-btn");
      const deleteBtn = event.target.closest(".delete-btn");
      const favoriteBtn = event.target.closest(".favorite-btn");

      console.log(favoriteBtn);
      console.log(deleteBtn);
      if (menuBtn) {
        const menuElement = document.querySelector(
          `.menu-${menuBtn.dataset.id}`
        );
        menuElement.classList.toggle("hidden");
      }
    });
  });
  // contactsElement.addEventListener("click", (event) => {
  // });
}

app(initialData, initialLabels);
