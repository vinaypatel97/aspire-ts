export function randomIntFromInterval(min: number, max: number) {
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const debounce = (cb, delay) => {
    let timer
    return (...params) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            cb(...params)
        }, delay);
    }
}