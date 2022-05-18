import React from "react";
import styles from './Schedule.module.scss'
import { Text } from "../../../UI/Text/Text";
import { Title } from "../../../UI/Title/Title";

export const Schedule = () => (
    <div className={styles.schedule__wrapper}>
        <Title style={styles.schedule__title}>Расписание</Title>
        <div className={styles.schedule__content}>
            <p className={styles.schedule__date}>
                <span>Суббота, 2 июля, 2022</span>
                <span className={styles.schedule__date_line}></span>
            </p>
            <div className={styles.schedule__timing}>
                <Text style={styles.schedule__time}>15:00 - 15:30</Text>
                <div className={styles.schedule__desc}>
                    <Text style={styles.schedule__desc_title}>Регистрация</Text>
                    <a href="/" className={styles.schedule__desc_link}>Краснодар, Гимназическая, 112</a>
                    <Text style={styles.schedule__desc_info}>В этом месте начнётся наш день. Мы будем рады видеть вас,
                        но отметим, что роспись займёт совсем немного времени и присутствие не обязательно.
                    </Text>
                </div>
            </div>
        </div>
    </div>
)