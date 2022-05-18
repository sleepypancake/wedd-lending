import React from "react";
import styles from './WelcomeBlock.module.scss'
import { Text } from "../../../UI/Text/Text";
import { Title } from "../../../UI/Title/Title";

export const WelcomeBlock = () => (
    <div className={styles.welcome__wrapper}>
        <div className={styles.welcome__details}>
            <Text style={styles.welcome__date}>Суббота, 2 июля, 2022</Text>
            <Title style={styles.welcome__place}>Краснодар,<br/> Краснодарский край, Россия</Title>
            <Text style={styles.welcome__counter}>274 дня 8 часов 57 мин </Text>
            <button className={styles.welcome__btn}>Добавить в календарь</button>
        </div>
    </div>
)