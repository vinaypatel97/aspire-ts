import { initialCardData } from './constant'
import { CardInterface } from './types'

export const fetchCards = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataFromStorage = localStorage.getItem("cardData")

            if (dataFromStorage && JSON.parse(dataFromStorage).length > 0) {
                resolve(JSON.parse(dataFromStorage))
            } else {
                localStorage.setItem("cardData", JSON.stringify(initialCardData))
                resolve(initialCardData)
            }
        }, 100);
    })
}

export const updateCards = (updatedData: Array<CardInterface>) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            localStorage.setItem("cardData", JSON.stringify(updatedData))
            resolve("ok")
        }, 100);
    })
}