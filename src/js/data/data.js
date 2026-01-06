export const initialLabels = [
  {
    id: "1",
    labelName: "Work",
    color: "red",
  },
  {
    id: "2",
    labelName: "Family",
    color: "green",
  },
];

export let initialData = [
  {
    id: "1",
    name: "Burhanudin Rabbani",
    phone: "081234678910",
    email: "example@example.com",
    labels: [initialLabels[1], initialLabels[0]],
    birthDate: new Date(2002, 10, 14),
    address: {
      street: "Jl ki brajanata",
      subdistrict: "Ciwaringin",
      city: "Cirebon",
      province: "West Java",
      country: "indonesia",
      zipCode: "45167",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    favorites: true,
  },
];
