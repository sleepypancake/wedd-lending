import React from "react";
import { Text } from "../../../UI/Text/Text";
import { Title } from "../../../UI/Title/Title";
import styles from './MoreInformation.module.scss'

export const MoreInformation = () => (
        <div className={styles.moreInformation__wrapper} >
            <Text style={styles.moreInformation__text}>И еще, чуть не забыли...</Text>
            <div className={styles.moreInformation__content}>
                <Title style={styles.moreInformation__title}>Без "Горько", пожалуйста!</Title>
            </div>
        </div>
    )