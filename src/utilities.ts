export function getRandomFloat(max: number = 0.3, min: number = 0): number {
     return min + Math.random() * (max - min + 1) 
}
