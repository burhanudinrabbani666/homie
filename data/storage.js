export function setLocalStorage(initialContact) {
  localStorage.setItem("contacts", JSON.stringify(initialContact));

  return;
}

export function getContactsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("contacts"));
}
