export function getRandomFloat(max: number = 0.3, min: number = 0): number {
     return min + Math.random() * (max - min + 1) 
}

const monthStrings = ["Present", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


export function getDateFormat(date: string) {
     const dateArr = date.split("-")
     const monthString = monthStrings[parseInt(dateArr[1])]
     const yearString = dateArr[0]
     return `${monthString} ${yearString}`;
}