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
                    <a href="/" className={styles.schedule__desc_link}>Краснодар, Гимназическая, 83</a>
                    <Text style={styles.schedule__desc_info}>В этом месте начнётся наш день. Мы будем рады видеть вас,
                        но отметим, что роспись займёт совсем немного времени и присутствие не обязательно.
                    </Text>
                </div>
            </div>
            <div className={styles.schedule__timing}>
                <Text style={styles.schedule__time}>16:00 - 17:00</Text>
                <div className={styles.schedule__desc}>
                    <Text style={styles.schedule__desc_title}>Обед с родителями</Text>
                </div>
            </div>
            <div className={styles.schedule__timing}>
                <Text style={styles.schedule__time}>17:30 - 22:00</Text>
                <div className={styles.schedule__desc}>
                    <Text style={styles.schedule__desc_title}>Праздничный ужин</Text>
                    <a href="/" className={styles.schedule__desc_link}>Ресторан Голый повар, Краснодар, Красная, 176</a>
                    <Text style={styles.schedule__desc_info}> Будем вкусно кушать, пить и веселиться. 
                        На территории есть парковка, 1 час бесплатно, дальше 100 р/час.
                    </Text>
                </div>
            </div>
            <div className={styles.schedule__map}>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A979fa20cef3188adf1b686ebe91e7e7b0b324d772d0fd752c9f0b8bc8980d857&amp;source=constructor"
                    width="100%"
                    height="250px"
                    frameBorder="0"
                    title="map"
                />
            </div>
        </div>
    </div>
)