import React, { useEffect, useState } from "react";
import styles from './WelcomeBlock.module.scss'
import { Text } from "../../../UI/Text/Text";
import { Title } from "../../../UI/Title/Title";
import { APPLE_LINK, APPLE_PLATFORMS, GOOGLE_LINK } from "../../../utils/constants";
import { getDateBefore } from "../../../utils/helpers/getDateBefore";

export const WelcomeBlock = () => {
    const [activeDate, setActiveDate] = useState(getDateBefore())

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDate(getDateBefore())
        }, 15000)
    return () => clearInterval(interval)
    }, [])

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
            <Text style={styles.welcome__counter}>
                {activeDate}
            </Text>
            <button className={styles.welcome__btn} onClick={handleClick}>Добавить в календарь</button>
        </div>
    </div>
    )
}