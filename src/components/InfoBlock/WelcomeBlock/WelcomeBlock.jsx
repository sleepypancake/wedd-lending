import React, { useEffect, useState } from "react";
import styles from './WelcomeBlock.module.scss'
import { Text } from "../../../UI/Text/Text";
import { Title } from "../../../UI/Title/Title";

const SECONDS_PER_DAY = 86400
const MILISECONDS_PER_DAY = 1000 * SECONDS_PER_DAY
const MILISECONS_PER_HOUR = 1000 * 3600
const MILISECONDS_PER_MINUTE = 1000 * 60

export const WelcomeBlock = () => {
    const [days, setDays] = useState(null)
    const [hours, setHours] = useState(null)
    const [minutes, setMinutes] = useState(null)
    const [seconds, setSeconds] = useState(null)
    const [letsSelebrate, setLetsSelebrate] = useState(false)

    const updateTime = () => {
        const today = new Date();
        const weddDay = new Date('07.02.2022')
        const timeForCounter = weddDay.getTime() - today.getTime()
        if (timeForCounter > 0) {
            const restFromDays = timeForCounter % (MILISECONDS_PER_DAY)
            const restFromHours = restFromDays %  MILISECONS_PER_HOUR
            const restFromMinutes = restFromHours %  MILISECONDS_PER_MINUTE
            setDays(Math.round(timeForCounter / MILISECONDS_PER_DAY))
            setHours(Math.round(restFromDays / MILISECONS_PER_HOUR))
            setMinutes(Math.round(restFromHours / MILISECONDS_PER_MINUTE))
            setSeconds(Math.round(restFromMinutes / 1000))
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
    
    return (
    <div className={styles.welcome__wrapper}>
        <div className={styles.welcome__details}>
            <Text style={styles.welcome__date}>Суббота, 2 июля, 2022</Text>
            <Title style={styles.welcome__place}>Краснодар,<br/> Краснодарский край, Россия</Title>
            {letsSelebrate ?  <Text style={styles.welcome__date}>Сегодня!</Text> : 
            <Text style={styles.welcome__counter}>{days} дня {hours} часов {minutes} мин {seconds} сек</Text>}
            <button className={styles.welcome__btn}>Добавить в календарь</button>
        </div>
    </div>
    )
}