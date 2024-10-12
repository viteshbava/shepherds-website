export const formatDate = (date: Date) => {
  const day: string = String(date.getDate()).padStart(2, '0');
  const month: string = date.toLocaleString('default', { month: 'long' });
  const year: number = date.getFullYear();

  const formattedDate: string = `${day} ${month} ${year}`;

  return formattedDate;
};
