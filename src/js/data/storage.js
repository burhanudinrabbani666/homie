export function setLocalStorage(initialContact) {
  localStorage.setItem("contact", JSON.stringify(initialContact));

  return;
}
