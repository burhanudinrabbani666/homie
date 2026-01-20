import { setLocalStorage } from "./storage.js";

export const initialLabels = [
  {
    id: "1",
    labelName: "work",
    color: "red",
  },
  {
    id: "2",
    labelName: "family",
    color: "green",
  },
  {
    id: "3",
    labelName: "sport",
    color: "blue",
  },
  {
    id: "4",
    labelName: "gamers",
    color: "blue  ",
  },
];

export let initialData = [
  {
    id: 1,
    name: "Burhanudin Rabbani",
    phone: "081234678910",
    email: "example@example.com",
    labels: [
      {
        labelName: "work",
        color: "red",
      },
      {
        labelName: "family",
        color: "green",
      },
    ],
    birthDate: new Date(2002, 10, 14),
    company: "PT Makmur Jaya Indonesia",
    address: {
      street: "Jl ki brajanata",
      subdistrict: "Ciwaringin",
      city: "Cirebon",
      province: "West Java",
      country: "indonesia",
      zipCode: "45167",
    },
    createdAt: new Date(),
    updatedAt: [
      { id: 1, date: new Date(2025, 10, 14) },
      { id: 2, date: new Date(2025, 8, 12) },
      { id: 3, date: new Date(2025, 7, 24) },
      { id: 4, date: new Date(2025, 6, 12) },
      { id: 5, date: new Date(2025, 5, 1) },
    ],
    deletedAt: null,
    favorites: true,
    photoProfileLink:
      "https://avatars.githubusercontent.com/u/228936784?s=400&u=11d4e54d4991c31c3daa02cfdc5d13ae87a56e87&v=4",
    backgroundLink:
      "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFuaW1lfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Ahmad Fauzi",
    phone: "081298765432",
    email: "ahmad.fauzi@example.com",
    labels: [
      {
        labelName: "work",
        color: "red",
      },
    ],
    birthDate: new Date(1998, 4, 21),
    company: "PT Shoppe",
    address: {
      street: "Jl Merdeka Raya",
      subdistrict: "Kejaksan",
      city: "Cirebon",
      province: "West Java",
      country: "Indonesia",
      zipCode: "45121",
    },
    createdAt: new Date(),
    updatedAt: [
      { id: 1, date: new Date(2025, 9, 30) },
      { id: 2, date: new Date(2025, 8, 15) },
      { id: 3, date: new Date(2025, 7, 10) },
      { id: 4, date: new Date(2025, 6, 1) },
      { id: 5, date: new Date(2025, 5, 18) },
    ],
    deletedAt: null,
    favorites: false,
    photoProfileLink:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    backgroundLink:
      "https://images.unsplash.com/photo-1768006238345-1d515dea8953?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Siti Aisyah",
    phone: "082112345678",
    email: "siti.aisyah@example.com",
    labels: [
      {
        labelName: "family",
        color: "green",
      },
    ],
    birthDate: new Date(2000, 7, 3),
    company: "PT Simnu",
    address: {
      street: "Jl Sunan Gunung Jati",
      subdistrict: "Harjamukti",
      city: "Cirebon",
      province: "West Java",
      country: "Indonesia",
      zipCode: "45143",
    },
    createdAt: new Date(),
    updatedAt: [
      { id: 1, date: new Date(2025, 10, 5) },
      { id: 2, date: new Date(2025, 9, 12) },
      { id: 3, date: new Date(2025, 8, 3) },
      { id: 4, date: new Date(2025, 6, 25) },
      { id: 5, date: new Date(2025, 5, 9) },
    ],
    deletedAt: null,
    favorites: true,
    photoProfileLink:
      "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundLink:
      "https://images.unsplash.com/photo-1768162125657-b31a6c0c90cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D  ",
  },
  {
    id: 4,
    name: "Rizky Pratama",
    phone: "085712345999",
    email: "rizky.pratama@example.com",
    labels: [
      {
        labelName: "sport",
        color: "blue",
      },
    ],
    birthDate: new Date(1997, 1, 15),
    company: "PT Simnu",
    address: {
      street: "Jl Kartini",
      subdistrict: "Lemahwungkuk",
      city: "Cirebon",
      province: "West Java",
      country: "Indonesia",
      zipCode: "45111",
    },
    createdAt: new Date(),
    updatedAt: [
      { id: 1, date: new Date(2025, 9, 20) },
      { id: 2, date: new Date(2025, 8, 7) },
      { id: 3, date: new Date(2025, 7, 1) },
      { id: 4, date: new Date(2025, 6, 10) },
      { id: 5, date: new Date(2025, 4, 28) },
    ],
    deletedAt: null,
    favorites: false,
    photoProfileLink:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    backgroundLink:
      "https://images.unsplash.com/photo-1768310512589-5925669f1784?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Dewi Lestari",
    phone: "081355667788",
    email: "dewi.lestari@example.com",
    labels: [
      {
        labelName: "work",
        color: "red",
      },
      {
        labelName: "sport",
        color: "blue",
      },
    ],
    birthDate: new Date(2001, 11, 9),
    company: "PT Simnu",
    address: {
      street: "Jl Cipto Mangunkusumo",
      subdistrict: "Kesambi",
      city: "Cirebon",
      province: "West Java",
      country: "Indonesia",
      zipCode: "45133",
    },
    createdAt: new Date(),
    updatedAt: [
      { id: 1, date: new Date(2025, 10, 1) },
      { id: 2, date: new Date(2025, 9, 18) },
      { id: 3, date: new Date(2025, 8, 9) },
      { id: 4, date: new Date(2025, 7, 2) },
      { id: 5, date: new Date(2025, 6, 14) },
    ],
    deletedAt: null,
    favorites: true,
    photoProfileLink:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    backgroundLink:
      "https://images.unsplash.com/photo-1768076644880-5cbbaf1a2b66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Andi Saputra",
    phone: "089612345321",
    email: "andi.saputra@example.com",
    labels: [
      {
        labelName: "family",
        color: "green",
      },
    ],
    birthDate: new Date(1999, 9, 27),
    company: "PT Simnu",
    address: {
      street: "Jl Tuparev",
      subdistrict: "Plumbon",
      city: "Cirebon",
      province: "West Java",
      country: "Indonesia",
      zipCode: "45155",
    },
    createdAt: new Date(),
    updatedAt: [{ id: 1, date: new Date(2025, 9, 8) }],
    deletedAt: null,
    favorites: false,
    photoProfileLink:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    backgroundLink:
      "https://images.unsplash.com/photo-1768326943634-f15d407bda45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
  },
];

export function newInitialContact(contact) {
  initialData = [...initialData, contact];

  return;
}

export function deleteContactFromInitial(contactId, contacts) {
  const newContacts = contacts.filter((contact) => contact.id !== contactId);

  setLocalStorage(newContacts);
  return newContacts;
}

export function isFavorited(contactId, contacts) {
  const newContacts = contacts.map((contact) => {
    return contact.id === contactId
      ? { ...contact, favorites: !contact.favorites }
      : contact;
  });

  setLocalStorage(newContacts);
  return newContacts;
}

export function editContact(newContact) {
  console.log(
    `Before edit`,
    initialData.find((contact) => contact.id === newContact.id),
  );

  initialData = initialData.map((contact) =>
    contact.id === newContact.id ? newContact : contact,
  );

  console.log(
    `After edit`,
    initialData.find((contact) => contact.id === newContact.id),
  );
}
