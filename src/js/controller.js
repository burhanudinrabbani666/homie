import { initialData, initialLabels } from "./data/data.js";
import { renderContact, renderLabels } from "./views.js";

// Dom
export const tagsElement = document.querySelector(".nav__tags");
export const contactsElement = document.querySelector(
  ".main__container-contact"
);
function app(initialData) {
  renderLabels(initialData);
  renderContact(initialData);

  const getParams = new URLSearchParams(window.location.search).get("search");
  if (getParams) {
    const resultSearch = initialData.filter((contact) =>
      contact.name.toLowerCase().includes(getParams.toLowerCase())
    );

    renderContact(resultSearch);
    return;
  }

  contactsElement.addEventListener("click", (event) => {
    const menuBtn = event.target.closest(".menu-btn");
    const deleteBtn = event.target.closest(".delete-btn");
    const favoriteBtn = event.target.closest(".favorite-btn");

    if (menuBtn) {
      const menuElement = document.querySelector(`.menu-${menuBtn.dataset.id}`);
      menuElement.classList.toggle("hidden");
    }

    if (deleteBtn) {
      const dataId = Number(deleteBtn.dataset.id);
      initialData = initialData.filter((contact) => contact.id !== dataId);

      renderContact(initialData);
      return;
    }

    if (favoriteBtn) {
      const dataId = Number(favoriteBtn.dataset.id);

      initialData = initialData.map((contact) =>
        contact.id === dataId
          ? { ...contact, favorites: !contact.favorites }
          : contact
      );

      renderContact(initialData);
      return;
    }
  });

  window.addEventListener("hashchange", () => {
    const labelToRender = window.location.hash.slice(1);

    // Render Favorites
    if (labelToRender === "favorites") {
      const favoritedContact = initialData.filter(
        (contact) => contact.favorites === true
      );

      renderContact(favoritedContact);
      return;
    }

    // Render Contact By tag
    const contactToRender = initialData.filter((contact) =>
      contact.labels.map((label) => label.labelName).includes(labelToRender)
    );
    if (contactToRender.length === 0)
      return alert("no contact with this label");

    renderContact(contactToRender);
    return;
  });
}

app(initialData, initialLabels);
