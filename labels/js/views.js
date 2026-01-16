import { renderContact } from "../../src/js/views.js";

export function renderContactsLabelPage(contacts, label) {
  const contactToRender = contacts.filter((contact) =>
    contact.labels.map((label) => label.labelName).includes(label)
  );
  renderContact(contactToRender);
}
