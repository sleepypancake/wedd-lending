import React from "react";
import styles from './Slider.module.scss'
import { SliderCard } from "./SliderCard/SliderCard";

export const Slider = ({executeScroll}) => (
    <div className={styles.slider__wrapper}>
        <SliderCard executeScroll={executeScroll}/>
    </div>
)