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

  contactsElement.addEventListener("click", (event) => {
    const menuBtn = event.target.closest(".menu-btn");
    const deleteBtn = event.target.closest(".delete-btn");

    if (menuBtn) {
      const menuElement = document.querySelector(".menu");
      menuElement.classList.toggle("hidden");
    }

    if (deleteBtn) {
      const dataId = deleteBtn.dataset.id;
      const newInitialData = initialData.filter(
        (contact) => contact.id !== dataId
      );

      initialData = newInitialData;

      renderContact(initialData);
    }
  });
}

app(initialData, initialLabels);
