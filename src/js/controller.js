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
    console.log(menuBtn.dataset.id);
    if (menuBtn) {
      const menuElement = document.querySelector(".menu");
      menuElement.classList.toggle("hidden");
    }
  });
}

app(initialData, initialLabels);
