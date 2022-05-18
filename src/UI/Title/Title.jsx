import React from "react";
import styles from './Title.module.scss'
import cn from 'classnames'

export const Title = ({ children, style }) => (
    <h2 className={cn(style, styles.title)}> {children} </h2>
)