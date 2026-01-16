import {
  contactsAmount,
  contactsElement,
  labelsElement,
} from "../../src/js/dom";
import { getContactsFromLocalStorage } from "../../data/storage";

function labelsPage() {
  const contacts = getContactsFromLocalStorage();
}

labelsPage();
