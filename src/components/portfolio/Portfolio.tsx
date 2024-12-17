import React from 'react'
import styles from './Portfolio.module.css'
import{ caveatFont,interFont } from '@/font'

import Portfoliocards from './Portfolio-cards/PortfolioCards'

function Portfolio() {
  return (
    <>
    <section className={styles.portfolio}>
        <h1 className={ caveatFont.className}>
            <span>M</span>y {' '} 
        <span>L</span>ast {' '}
         <span>W</span>ork</h1>

         <p className={interFont.className}>I am a passionate web developer with a knack for crafting elegant and user-friendly websites.<br/>
          With a solid foundation in HTML, CSS, and JavaScript, I specialize in creating visually stunning and interactive 
          <br/>web experiences.
         </p>
         <div className={styles.myWork}>
            <Portfoliocards/>


         </div>

    </section>
    </>
  )
}

export default Portfolio