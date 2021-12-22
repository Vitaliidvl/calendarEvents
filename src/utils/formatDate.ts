export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
  return `${year}.${month}.${day}`;
};
