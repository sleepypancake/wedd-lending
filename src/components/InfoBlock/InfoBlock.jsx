import React from "react";
import { Schedule } from "./Schedule/Schedule";
import { WelcomeBlock } from "./WelcomeBlock/WelcomeBlock";
import styles from './InfoBlock.module.scss'

export const InfoBlock = () => (
    <div className={styles.info__wrapper}>
        <WelcomeBlock/>
        <hr/>
        <Schedule/>
    </div>
)