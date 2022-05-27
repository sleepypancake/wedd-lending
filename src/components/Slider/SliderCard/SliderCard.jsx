import React, { useRef, useState } from "react";
import { Text } from "../../../UI/Text/Text";
import { Title } from "../../../UI/Title/Title";
import styles from './SliderCard.module.scss'
import cn from 'classnames'

export const SliderCard = ({activeId}) => {
    const slideBlock = useRef(null)
    const [btnActive, setBtnActive] = useState(true)
    const executeScroll = () => {
        window.scroll(0, slideBlock.current.offsetHeight)
        setBtnActive(false)
    }

    console.log(activeId)
    return (
    <div className={cn(styles.sliderCard__wrapper, styles[`active_${activeId}`])} ref={slideBlock}>
        <div className={styles.sliderCard__desc_wrap}>
            {activeId === 0 && <div className={styles.sliderCard__desc}>
                <Title style={styles.sliderCard__title}> Арсен <br/> & Анастасия </Title>
                <Text style={styles.sliderCard__text}> Мы с нетерпением ждём и будем  рады  разделить с  Вами  радость дня  нашей  свадьбы!</Text>
                {btnActive && <button className={styles.sliderCard__more} onClick={executeScroll}>Смотреть детали</button>}
            </div>}
        </div>
    </div>
    )
}