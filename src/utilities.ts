import { registerLocaleData } from "@angular/common";

export function getRandomFloat(max: number = 0.3, min: number = 0): number {
     return min + Math.random() * (max - min + 1) 
}

const monthStrings = [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


export function getDateFormat(date) {
     const dateArr = date.split("-")
     const monthString = monthStrings[parseInt(dateArr[1])]
     const yearString = dateArr[0]
     return `${monthString} ${yearString}`;
}