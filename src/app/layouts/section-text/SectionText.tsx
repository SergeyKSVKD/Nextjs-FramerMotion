"use client"

import React from "react"
import styles from './section-text.module.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

interface TextProps {
    children: React.ReactNode
}

const TextContainer = ({ children }: TextProps) => {
    const text = React.useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: text,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress,
        [1, 0.8, 0],
        [1, 1, 0]
    )

    const xTransform = useTransform(
        scrollYProgress,
        [1, 0.4, 0],
        [0, 0, -1000]
    )

    return (
        <div ref={text}>
            <motion.p style={{ opacity, x: xTransform }}>
                {children}
            </motion.p>
        </div>
    )
}

function TextSection() {

    return (
        <div className={styles.text}>
            <TextContainer>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rem!</TextContainer>
            <TextContainer>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rem!</TextContainer>
            <TextContainer>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rem!</TextContainer>
            <TextContainer>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rem!</TextContainer>
            <TextContainer>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rem!</TextContainer>
            <TextContainer>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rem!</TextContainer>
            <TextContainer>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rem!</TextContainer>
            <TextContainer>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rem!</TextContainer>
            <div style={{height: '100px'}}/>
        </div>
    )
}

export default TextSection