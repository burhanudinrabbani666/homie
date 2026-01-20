export function getLabelfromContacts(contacts) {
  const labelsArray = contacts.flatMap((contact) => contact.labels);
  const labelJson = new Set(labelsArray.map((label) => JSON.stringify(label)));
  const labels = Array.from(labelJson).map((labelUnique) =>
    JSON.parse(labelUnique),
  );

  return labels;
}
