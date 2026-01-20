export function getLabelfromContacts(contacts) {
  const labelsArray = contacts.flatMap((contact) => contact.labels);
  const labelJson = new Set(labelsArray.map((label) => JSON.stringify(label)));
  console.log(labelJson);
  const labels = Array.from(labelJson).map((labelUnique) =>
    JSON.parse(labelUnique),
  );

  return labels;
}
