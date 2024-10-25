export function getRandomFloat(max: number = 0.3, min: number = 0): number {
  return min + Math.random() * (max - min + 0.5);
}

const monthStrings = [
  'Present',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function getDateFormat(date: string) {
  const dateArr = date.split('-');
  const monthString = monthStrings[parseInt(dateArr[1])];
  const yearString = dateArr[0];
  return `${monthString} ${yearString}`;
}

export function calculateYearsExperience(dateStartedWork: string) {
  const [year, month, day] = dateStartedWork.split('-').map(Number);
  const dateStarted = new Date(year, month - 1, day);
  const currentDate = new Date();

  let yearsOfExperience = currentDate.getFullYear() - dateStarted.getFullYear();

  if (currentDate.getMonth() < dateStarted.getMonth()) {
    yearsOfExperience--;
  }
  return yearsOfExperience;
}
