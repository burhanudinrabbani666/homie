import { initialData } from "/src/js/data/data.js";
import { renderData } from "./views.js";

function renderContact() {
  const contactID = window.location.search.split("=").slice(-1);
  const contact = initialData.find(
    (contact) => contact.id === Number(...contactID)
  );

  renderData(contact);
}

renderContact();
