import { renderFavorites } from "./views.js";
import { formElement } from "./dom.js";
import {
  getContactsFromLocalStorage,
  setLocalStorage,
} from "../../../data/storage.js";
import { getLabelfromContacts } from "../../../src/js/modal.js";

export let favoritesValue = false;

export function isFavorited() {
  favoritesValue = !favoritesValue;
  renderFavorites(favoritesValue);
}

export function addNewContact(event) {
  event.preventDefault();

  const contacts = getContactsFromLocalStorage();
  const labels = getLabelfromContacts(contacts);
  const data = new FormData(formElement);
  const newID = contacts.at(-1).id + 1;
  const labelInputCheckBox = labels.filter(
    (label) => data.get(`${label.labelName}`) === "on",
  );
  const newLabel = {
    labelName: data.get("labelName").toString().trim().toLowerCase() || null,
    color: data.get("labelColor").toString().trim().toLowerCase() || null,
  };

  let labelsInput;

  // user not adding label
  if (
    data.get("labelName") === "" &&
    data.get("labelColor") === "" &&
    labelInputCheckBox.length === 0
  ) {
    labelsInput = {
      labelName: "",
      color: "",
    };
  }

  // if user add new label and not adding label by old labels
  if (
    data.get("labelName") !== "" &&
    data.get("labelColor") !== "" &&
    labelInputCheckBox.length === 0
  ) {
    labelsInput = [newLabel];
  }

  // if user adding new label and add old label together
  if (
    data.get("labelName") !== "" &&
    data.get("labelColor") !== "" &&
    labelInputCheckBox.length > 0
  ) {
    labelsInput = [...labelInputCheckBox, newLabel];
  }

  // if user only add old label
  if (
    (data.get("labelName") === "" || data.get("labelColor") === "") &&
    labelInputCheckBox.length > 0
  ) {
    labelsInput = labelInputCheckBox;
  }

  const newContact = {
    id: newID,
    name: data.get("name").toString().trim(),
    phone: data.get("phone").toString().trim() || null,
    email: data.get("email").toString().trim() || null,
    labels: labelsInput,
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
