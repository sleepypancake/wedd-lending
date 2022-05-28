import { MILISECONDS_PER_DAY, MILISECONDS_PER_MINUTE, MILISECONS_PER_HOUR } from "../constants"
import { declOfNum } from "./declOfNum";

export const getDateBefore = () => {
    const today = new Date();
    const weddDay = new Date('07.02.2022')
    const timeForCounter = weddDay.getTime() - today.getTime()
    if (timeForCounter > 0) {
        const restFromDays = timeForCounter % MILISECONDS_PER_DAY
        const restFromHours = restFromDays %  MILISECONS_PER_HOUR
        const daysBefore = Math.round(timeForCounter / MILISECONDS_PER_DAY)
        const hoursBefore = Math.round(restFromDays / MILISECONS_PER_HOUR)
        const minutesBefore = Math.round(restFromHours / MILISECONDS_PER_MINUTE)
        console.log(restFromDays, restFromHours, daysBefore, hoursBefore, minutesBefore)
        return (
            `
                ${daysBefore} ${declOfNum(daysBefore, ['день ', 'дня ', 'дней '])}
                ${hoursBefore} ${declOfNum(hoursBefore, ['час ', 'часа ', 'часов '])}
                ${minutesBefore} ${declOfNum(minutesBefore, ['минута ', 'минуты ', 'минут '])}
            `
        )
    } else {
        return 'Сегодня!'
    }
}