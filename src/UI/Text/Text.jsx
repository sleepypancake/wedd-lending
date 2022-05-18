import React from "react";
import styles from './Text.module.scss'
import cn from 'classnames'

export const Text = ({ children, style }) => (
    <p className={cn(style, styles.text)}> {children} </p>
)