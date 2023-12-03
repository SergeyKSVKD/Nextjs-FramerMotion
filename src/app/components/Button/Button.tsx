"use client"

import React from "react"
import styles from "./button.module.scss"

interface ButtonProps {
    name: string,
    icon?: React.ReactNode,
    background?: string,
    color?: string,
    border?: string,
    width?: string,
}

const Button = ({ name, background='var(--color-bg)', border, color, icon, width }: ButtonProps) => {

    return (<>
        <div className={styles.button} 
        style={{
            background, color, border, width,
        }}>
            {icon && icon}
            {name}
        </div>
    </>)
}

export default Button