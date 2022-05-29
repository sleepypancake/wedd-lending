import { MILISECONDS_PER_DAY, MILISECONDS_PER_MINUTE, MILISECONS_PER_HOUR } from "../constants"
import { declOfNum } from "./declOfNum";

export const getDateBefore = () => {
    const today = new Date();
    const weddDay = new Date('07/02/2022')
    // const weddDay = new Date('05/30/2022')
    const timeForCounter = weddDay.getTime() - today.getTime()
    if (timeForCounter > 0) {
        const restFromDays = timeForCounter % MILISECONDS_PER_DAY
        const restFromHours = restFromDays %  MILISECONS_PER_HOUR
        const daysBefore = Math.round(timeForCounter / MILISECONDS_PER_DAY)
        const hoursBefore = Math.round(restFromDays / MILISECONS_PER_HOUR)
        const minutesBefore = Math.round(restFromHours / MILISECONDS_PER_MINUTE)
        const dayForString = hoursBefore === 24 ? daysBefore - 1 : daysBefore
        const hoursForString = hoursBefore === 24 ? 23 : minutesBefore === 60 ? hoursBefore - 1 : hoursBefore
        const minutesForString = minutesBefore === 60 ? 59 :  minutesBefore

        return (
            `
                ${dayForString} ${declOfNum(dayForString, ['день ', 'дня ', 'дней '])}
                ${hoursForString} ${declOfNum(hoursForString, ['час ', 'часа ', 'часов '])}
                ${minutesForString} ${declOfNum(minutesForString, ['минута ', 'минуты ', 'минут '])}
            `
        )
    } else {
        return 'Сегодня!'
    }
}