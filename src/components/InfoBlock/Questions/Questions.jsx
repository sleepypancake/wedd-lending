import React from "react";
import { Text } from "../../../UI/Text/Text";
import { Title } from "../../../UI/Title/Title";
import styles from './Questions.module.scss'

export const Questions = () => (
    <div className={styles.questions__wrapper}>
        <Title style={styles.questions__title}>Важные моменты</Title>
        <div className={styles.questions__content}>
            <div className={styles.accordeon}>
                <Text className={styles.accordeon__title}>Дресс-код</Text>
                <Text className={styles.accordeon__answer}>
                    Формат нашей свадьбы не предполагает особого дресс-кода, поэтому мы будем рады видеть вас нарядными и счастливыми!
                </Text>
            </div>
            <div className={styles.accordeon}>
                <Text className={styles.accordeon__title}>Подарки</Text>
                <Text className={styles.accordeon__answer}>
                    Ваше внимание и хорошее настроение - уже подарок для нас! Если хотите подарить нам ценный и нужный подарок, мы будем очень благодарны за вклад в бюджет нашей молодой семьи. Просим Вас не дарить нам цветы - сразу после свадьбы мы улетаем в свадебное путешествие и не успеем насладиться их красотой.
                </Text>
            </div>
            <div className={styles.accordeon}>
                <Text className={styles.accordeon__title}>Детали</Text>
                <Text className={styles.accordeon__answer}>
                    Пожалуйста, подтвердите ваше присутствие на нашем празднике до  20 июня 2022 года телефонным звонком/сообщением/почтовым голубем или любым удобным другим для вас способом.
                </Text>
            </div>
        </div>
    </div>
)