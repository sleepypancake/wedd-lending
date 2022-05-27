import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Text } from "../../../UI/Text/Text";
import { Title } from "../../../UI/Title/Title";
import styles from './Questions.module.scss'

export const Questions = ({setActiveSlideCard}) => {
    const { ref, inView, } = useInView({
        threshold: 0,
      });

    useEffect(() => {
        if (inView) setActiveSlideCard(2)
    }, [inView, setActiveSlideCard])

    return (
    <div className={styles.questions__wrapper} ref={ref}>
        <Title style={styles.questions__title}>Важные моменты</Title>
        <div className={styles.questions__content}>
            <div className={styles.accordeon}>
                <Text style={styles.accordeon__title}>Дресс-код</Text>
                <Text style={styles.accordeon__answer}>
                    Формат нашей свадьбы не предполагает особого дресс-кода, поэтому мы просто будем рады видеть вас нарядными и счастливыми!
                </Text>
            </div>
            <div className={styles.accordeon}>
                <Text style={styles.accordeon__title}>Подарки</Text>
                <Text style={styles.accordeon__answer}>
                    Ваше внимание и хорошее настроение - уже подарок для нас! Если хотите подарить нам ценный и нужный подарок, мы будем очень благодарны за вклад в бюджет нашей молодой семьи. <br/>
                    Просим Вас не дарить нам цветы - сразу после свадьбы мы улетаем в свадебное путешествие и не успеем насладиться их красотой. :(
                </Text>
            </div>
            <div className={styles.accordeon}>
                <Text style={styles.accordeon__title}>Детали</Text>
                <Text style={styles.accordeon__answer}>
                    Пожалуйста, подтвердите ваше присутствие на нашем празднике до  20 июня 2022 года телефонным звонком/сообщением/почтовым голубем или любым другим удобным для вас способом.
                </Text>
            </div>
        </div>
    </div>
    )
}