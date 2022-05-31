import React, { useEffect, useState } from "react";
import styles from './Slider.module.scss'
import { SliderCard } from "./SliderCard/SliderCard";
import { getDateBefore } from "../../utils/helpers/getDateBefore";

export const Slider = () => {
    const [activeId, setActiveId] = useState(0)
    const [activeDate, setActiveDate] = useState(getDateBefore().trim().split('\n'))
    const [inheritActiveBtn, setInheritActiveBtn] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveId((current) => {
                const res = current === 7 ? 0 : current + 1
                return res
            })
            setActiveDate(getDateBefore().trim().split('\n'))
            setInheritActiveBtn(false)
        }, 15000)
    return () => clearInterval(interval)
    }, [])

    return (
    <div className={styles.slider__wrapper}>
        <SliderCard activeId={activeId} activeDate={activeDate} inheritActiveBtn={inheritActiveBtn}/>
    </div>
    )
}