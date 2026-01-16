export function setLocalStorage(initialContact) {
  localStorage.setItem("contact", JSON.stringify(initialContact));

  return;
}

export function getContactsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("contact"));
}
