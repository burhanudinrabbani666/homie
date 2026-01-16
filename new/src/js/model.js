import { renderFavorites } from "./views.js";
import { formElement } from "./dom.js";
import {
  getContactsFromLocalStorage,
  setLocalStorage,
} from "../../../data/storage.js";

export let favoritesValue = false;

export function isFavorited() {
  favoritesValue = !favoritesValue;
  renderFavorites(favoritesValue);
}

export function addNewContact(event) {
  event.preventDefault();

  const contacts = getContactsFromLocalStorage();

  const data = new FormData(formElement);
  const newID = contacts.length + 1;
  const newContact = {
    id: newID,
    name: data.get("name").toString().trim(),
    phone: data.get("phone").toString().trim() || null,
    email: data.get("email").toString().trim() || null,
    labels: [
      {
        labelName: data.get("labelName").toString().trim(),
        color: data.get("labelColor").toString().trim(),
      },
    ],
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
    createdAt: new Date(),
    updatedAt: [{ id: 1, date: new Date() }],
    deletedAt: null,
    favorites: favoritesValue,
    photoProfileLink: data.get("photoProfile").toString().trim() || null,
    backgroundLink: data.get("bgImageLink").toString().trim() || null,
  };

  const newContacts = [...contacts, newContact];

  setLocalStorage(newContacts);

  window.location.href = `/detail-contact/?id=${newContact.id}`;
}
