import { initialData, editContact } from "../../../src/js/data/data.js";
import { formBtnEditElement } from "./dom.js";
import { isFavoritedEdit } from "./script.js";

export function editContactSubmit(event) {
  event.preventDefault();

  const query = window.location.search.split("=").splice(-1).join("");
  const contactId = Number(query);
  const contact = initialData.find((contact) => contact.id === contactId);

  const data = new FormData(formBtnEditElement);
  const newContact = {
    id: contactId,
    name: data.get("name").toString().trim(),
    phone: data.get("phone").toString().trim(),
    email: data.get("email").toString().trim(),
    labels: contact.labels,
    birthDate: data.get("birthdate") ? new Date(data.get("birthdate")) : null,
    company: data.get("company").toString().trim() || null,
    address: {
      street: data.get("street").toString().trim() || null,
      subdistrict: data.get("subdistrict").toString().trim() || null,
      city: data.get("city").toString().trim() || null,
      province: data.get("province").toString().trim() || null,
      country: data.get("country").toString().trim() || null,
      zipCode: data.get("zipCode").toString().trim() || null,
    },
    createdAt: contact.createdAt,
    updatedAt: [
      ...contact.updatedAt,
      { id: contact.updatedAt.length + 1, date: new Date() },
    ],
    deletedAt: null,
    favorites: isFavoritedEdit,
    photoProfileLink: data.get("photoProfile").toString().trim() || null,
    backgroundLink: data.get("bgImageLink").toString().trim() || null,
  };
  console.log(contactId);
  editContact(newContact);
  window.location.href = `/detail-contact/?id=${contactId}`;
}
