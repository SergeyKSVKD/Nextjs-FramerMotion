'use client'

import React from "react"
import styles from './section-layout.module.scss'

interface sectionLayoutProps {
    children?: React.ReactNode,
    ref?: React.RefObject<HTMLDivElement>
}

const SectionLayout = ({ children, ref }: sectionLayoutProps) => {

    return (<>
        <div className={styles.main}>
            {children}
        </div>
    </>)
}

export default SectionLayout