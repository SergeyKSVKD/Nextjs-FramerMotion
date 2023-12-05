'use client'

import React from "react"
import styles from './card.module.scss'
import Image, { StaticImageData } from "next/image"


interface cardProps {
    title: string,
    description: string,
    image: StaticImageData,
}

const Card = ({ title, description, image }: cardProps) => {

    return (<>
        <div className={styles.card}>
            <div className={styles.image}>
                <p className={styles.new}>New</p>
                <div className={styles.text}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <Image src={image} alt="image" style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "8px",
                }} />
            </div>
            <div className={styles.overlay} />
        </div>
    </>)
}

export default Card