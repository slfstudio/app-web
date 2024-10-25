export function calculateAge(birthDateString: string) {
  if (!birthDateString) {
    return 0;
  }

  if (!birthDateString.includes('T')) {
    birthDateString = changeFormat(birthDateString);
  }
  const birthDate = new Date(birthDateString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  // Adjust if the birthday hasn't occurred yet this year

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
}

export function formatDate(dateString: string) {
  // Parse the date string to a Date object
  const date = new Date(dateString);

  // Get the day, month, and year
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();

  // Return the date in DD-MM-YYYY format
  return `${day}-${month}-${year}`;
}

export function changeFormat(dateString: string) {
  console.log("dateStrig",dateString)
  // Split the date string into day, month, and year
  const [month, day, year] = dateString.split('/');

  // Format the date as "YYYY-MM-DD"
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

export function formatUserDate(dateString: string) {
  const [year, month, day] = dateString.split('-');

  // Format the date as "YYYY-MM-DD"
  const formattedDate = `${month}/${day}/${year}`;

  return formattedDate;
}

export const parseDate = (value: string) => {
  const [month, day, year] = value.split('/').map(Number);
  return new Date(year, month - 1, day);
};

export function utcDateAddMonthsToShortDisplay(date: string | Date, days = 0) {
  const inputDate = new Date(date);
  inputDate.setUTCDate(inputDate.getUTCDate() + days);
  return inputDate.toISOString().split('T')[0];
}

export function utcDateToShortDisplay(date: string | Date | null): string | null {
  if (!date) return null;

  const inputDate = new Date(date);

  if (isNaN(inputDate.getTime())) return null;

  return inputDate.toISOString().split('T')[0];
}

export function formatDateString(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  return `${month} ${day}, ${year}`;
}
