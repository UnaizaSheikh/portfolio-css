'use client'
import React from 'react'
import styles from './Aboutsection.module.css'
import { caveatFont, interFont } from '@/font';
import Button from '../Button/Button';
import Image from 'next/image';
import {motion} from 'framer-motion';


function AboutSection() {
    return (
        <>
        <section className={styles.about}>
            <motion.div className={styles.aboutLeftDiv}
             initial={{opacity:0,x:-100}}
              whileInView={{opacity:1,x:0}}
               transition={{duration:2, type:'spring' }}>
                
                <h1 className={caveatFont.className}>Unaiza Sheikh</h1>
                
                <p className={caveatFont.className}>Freelance Web Developer</p>
                <h2 className={`${styles.detailText} ${interFont.className}`}>
                    I am a passionate web developer with a knack for crafting elegant
                     and user-friendly websites. With a solid foundation in HTML, CSS, and JavaScript, 
                     I specialize in creating visually stunning and interactive web experiences.</h2>
                <Button  text={"Contact Me"}/>
            </motion.div>


            <motion.div className={styles.aboutRightDiv}
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
             transition={{duration:2, type:'spring' }}>
                <Image src={'/Doll.jpg'} alt="profile picture" width={300} height={300}
                className={styles.img} ></Image>
                
            </motion.div>
        </section>
        </>
    )
}
export default AboutSection;