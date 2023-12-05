'use client'

import React from 'react'
import Header from './components/Header/Header'
import SectionLayout from './layouts/section-layout/SectionLayout'
import cards from './components/Card/cards'
import styles from './layout.module.scss'
import Card from './components/Card/Card'

export default function Home() {
  return (<>
    <Header />
    <SectionLayout>
      {cards.map((el, index) => {
        return (<Card key={index}
          title={el.title}
          image={el.image}
          description={el.description}
        />)
      })}
    </SectionLayout>
  </>)
}
