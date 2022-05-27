import React from "react";
import { Schedule } from "./Schedule/Schedule";
import { WelcomeBlock } from "./WelcomeBlock/WelcomeBlock";
import styles from './InfoBlock.module.scss'
import { Questions } from "./Questions/Questions";
import { MoreInformation } from "./MoreInformation/MoreInformation";

export const InfoBlock = ({setActiveSlideCard}) => (
    <div className={styles.info__wrapper}>
        <WelcomeBlock setActiveSlideCard={setActiveSlideCard}/>
        <Schedule setActiveSlideCard={setActiveSlideCard}/>
        <Questions setActiveSlideCard={setActiveSlideCard}/>
        <MoreInformation setActiveSlideCard={setActiveSlideCard}/>
    </div>
)