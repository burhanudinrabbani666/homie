import { getLabelfromContacts } from "../../../src/js/modal.js";
import { favoritesBtnElement, LabelFields } from "./dom.js";
import { btnAddNewLabels, newLabelFields } from "./dom.js";

let openLabelFields = false;

export function renderFavorites(favorites) {
  favoritesBtnElement.innerHTML = `<ion-icon name="star${
    favorites ? "" : "-outline"
  }" style="${favorites ? "color: #FFD700" : ""}"></ion-icon>`;
}

export function addNewlabel() {
  newLabelFields.classList.toggle("hidden");

  openLabelFields = !openLabelFields;
  if (openLabelFields) btnAddNewLabels.textContent = "cancel";
  else btnAddNewLabels.textContent = `+ Add new label`;

  return;
}

export function renderLabelsForInput(contacts) {
  const labels = getLabelfromContacts(contacts);
  const html = labels.map((label) => {
    return `
     <div class="form__checkbox-item fields__checkbox tag">
       <input
         type="checkbox"
         name=${label.labelName}
         id=${label.labelName}
         class="form__input-checkbox"
       />
       <label
         for=${label.labelName}
         class="form__input-checkbox--label tag label-color-${label.color}"
         >${label.labelName}</label
       >
     </div>
`;
  });

  LabelFields.innerHTML = html.join("");
}
