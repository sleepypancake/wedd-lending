import React from "react";
import styles from './Slider.module.scss'
import { SliderCard } from "./SliderCard/SliderCard";

export const Slider = () => (
    <div className={styles.slider__wrapper}>
        <SliderCard/>
    </div>
)