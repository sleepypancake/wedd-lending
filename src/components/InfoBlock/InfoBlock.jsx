import React from "react";
import { Schedule } from "./Schedule/Schedule";
import { WelcomeBlock } from "./WelcomeBlock/WelcomeBlock";
import styles from './InfoBlock.module.scss'
import { Questions } from "./Questions/Questions";
import { MoreInformation } from "./MoreInformation/MoreInformation";

export const InfoBlock = () => (
    <div className={styles.info__wrapper}>
        <WelcomeBlock/>
        <Schedule/>
        <Questions />
        <MoreInformation />
    </div>
)