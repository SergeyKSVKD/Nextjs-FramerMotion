'use client'

import React from 'react'
import Header from './components/Header/Header'
import SectionLayout from './layouts/section-layout/SectionLayout'
import SectionText from './layouts/section-text/SectionText'
import cards from './components/Card/cards'
import styles from './layout.module.scss'
import Card from './components/Card/Card'
import HorizontalWrapper from './components/horizontal-wrapper/HorizontalWrapper'

export default function Home() {
  return (<>
    <Header />
    <HorizontalWrapper height='40rem' direction={-1400}>
      <SectionLayout>
        <div className={styles.cards}>
          {cards.map((el, index) => {
            return (<Card key={index}
              title={el.title}
              image={el.image}
              description={el.description}
            />)
          })}
        </div>
      </SectionLayout>
    </HorizontalWrapper>
    <HorizontalWrapper height='40rem' direction={1400}>
    <SectionLayout>
      <div className={styles.cards} style={{
        right: 0,
      }}>
        {cards.map((el, index) => {
          return (<Card key={index}
            title={el.title}
            image={el.image}
            description={el.description}
          />)
        })}
      </div>
    </SectionLayout>
    </HorizontalWrapper>
    <SectionLayout>
      <SectionText />
    </SectionLayout>
  </>)
}
