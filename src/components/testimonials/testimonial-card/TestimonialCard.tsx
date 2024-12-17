import React from 'react';
import styles from './TestimonialCard.module.css'
import Image from 'next/image';
import { interFont } from '@/font';
import { TestimonialCards } from '../../constant/TestimonialCard';

function TestimonialCard() {
  return (
    <>
    {TestimonialCards.map((card, index) => {return(
        <div className={`${styles.card}  ${interFont.className}`} key={index}>

<div className={styles.cardImage} >
    <Image
    src={card.src}
    alt="cards"
    width={150}
    height={150}

    />
</div>
<h1>{card.name}</h1>
<p ><span>{card.title}</span></p>
<p style={{marginBottom: '0px'}}>{card.description}</p>


</div>
)})}
     

    </>
  )
}

export default TestimonialCard