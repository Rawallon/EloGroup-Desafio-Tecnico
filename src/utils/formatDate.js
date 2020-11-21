function formatDate(date) {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    // timeZone: 'America/Los_Angeles',
  };
  if (date === undefined) return;
  return new Intl.DateTimeFormat('pt-br', options).format(
    new Date(parseInt(date)),
  );
}

export default formatDate;
