import React, { useEffect, useState } from "react";
import styles from './WelcomeBlock.module.scss'
import { Text } from "../../../UI/Text/Text";
import { Title } from "../../../UI/Title/Title";
import { declOfNum } from "../../../utils/Hooks/declOfNum";
import { APPLE_LINK, APPLE_PLATFORMS, GOOGLE_LINK, MILISECONDS_PER_DAY, MILISECONDS_PER_MINUTE, MILISECONS_PER_HOUR } from "../../../utils/constants";

export const WelcomeBlock = () => {
    const [days, setDays] = useState(null)
    const [hours, setHours] = useState(null)
    const [minutes, setMinutes] = useState(null)
    const [letsSelebrate, setLetsSelebrate] = useState(false)

    const updateTime = () => {
        const today = new Date();
        const weddDay = new Date('07.02.2022')
        const timeForCounter = weddDay.getTime() - today.getTime()
        if (timeForCounter > 0) {
            const restFromDays = timeForCounter % (MILISECONDS_PER_DAY)
            const restFromHours = restFromDays %  MILISECONS_PER_HOUR
            setDays(Math.round(timeForCounter / MILISECONDS_PER_DAY))
            setHours(Math.round(restFromDays / MILISECONS_PER_HOUR))
            setMinutes(Math.round(restFromHours / MILISECONDS_PER_MINUTE))
        } else {
            setLetsSelebrate(true)
        }
    }

    useEffect(() => {
        const token = setTimeout(updateTime, 1000)
        return function cleanUp() {
          clearTimeout(token);
        }
      })

      const handleClick = () => {
        const platform = navigator.platform
        if (APPLE_PLATFORMS.some(el => el === platform)) {
            window.location.href = APPLE_LINK
        } else  window.location.href = GOOGLE_LINK
      }

    return (
    <div className={styles.welcome__wrapper}>
        <div className={styles.welcome__details}>
            <Text style={styles.welcome__date}>Суббота, 2 июля, 2022</Text>
            <Title style={styles.welcome__place}>Краснодар,<br/> Краснодарский край, Россия</Title>
            {letsSelebrate ?  <Text style={styles.welcome__date}>Сегодня!</Text> :
            <Text style={styles.welcome__counter}>
                {days} {declOfNum(days, ['день ', 'дня ', 'дней '])}
                {hours} {declOfNum(hours, ['час ', 'часа ', 'часов '])}
                {minutes} {declOfNum(minutes, ['минута ', 'минуты ', 'минут '])}
            </Text>}
            <button className={styles.welcome__btn} onClick={handleClick}>Добавить в календарь</button>
        </div>
    </div>
    )
}