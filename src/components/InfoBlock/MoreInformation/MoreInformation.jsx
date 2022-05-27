import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Text } from "../../../UI/Text/Text";
import { Title } from "../../../UI/Title/Title";
import styles from './MoreInformation.module.scss'

export const MoreInformation = ({setActiveSlideCard}) => {
    const { ref, inView, } = useInView({
        threshold: 0,
      });

    useEffect(() => {
        if (inView) setActiveSlideCard(3)
    }, [inView, setActiveSlideCard])

    return (
        <div className={styles.moreInformation__wrapper} ref={ref}>
            <Text style={styles.moreInformation__text}>И еще, чуть не забыли...</Text>
            <div className={styles.moreInformation__content}>
                <Title style={styles.moreInformation__title}>No gor'ko, please!</Title>
            </div>
        </div>
    )
}