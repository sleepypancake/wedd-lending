import React from "react";
import { Text } from "../../../UI/Text/Text";
import { Title } from "../../../UI/Title/Title";
import styles from './SliderCard.module.scss'

export const SliderCard = () => (
    <div className={styles.sliderCard__wrapper}>
        <div className={styles.sliderCard__desc_wrap}>
            <div className={styles.sliderCard__desc}>
                <Title style={styles.sliderCard__title}> Арсен <br/> & Анастасия </Title>
                <Text style={styles.sliderCard__text}> Мы с нетерпением ждём и будем  рады  разделить с  Вами  радость дня  нашей  свадьбы!</Text>
            </div>
        </div>
    </div>
)