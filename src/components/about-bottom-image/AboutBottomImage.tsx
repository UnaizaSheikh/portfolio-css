'use client'
import React from 'react'
import styles from './AboutBottomImage.module.css'
import Image from 'next/image'
import {motion } from 'framer-motion'



const containerVarients = {
  hidden: {},
  show: {
   
    transition: {
     straggerChildren: 0.2
    }
  }
}

const itemVarients = {
  hidden: {opacity: 0, y: 20},
  show: {opacity:1, y:0}
}
function AboutBottomImage() {
  return (
    <>
    <motion.section className={styles.aboutBottomImage}
    variants={containerVarients}
     initial="hidden"
      whileInView="show">
        
       <motion.div variants={itemVarients}><Image src={'/css.png'} alt="freelance" width={96} height={96} ></Image></motion.div>
       <motion.div variants={itemVarients}><Image src={'/typescript.png'} alt="freelance" width={70} height={70} ></Image></motion.div>
       <motion.div variants={itemVarients}><Image src={'/git.png'} alt="freelance" width={96} height={96} ></Image></motion.div>
       <motion.div variants={itemVarients}><Image src={'/figma.png'} alt="freelance" width={96} height={96} ></Image></motion.div>
       <motion.div variants={itemVarients}><Image src={'/react.png'} alt="freelance" width={96} height={96} ></Image></motion.div>
       <motion.div variants={itemVarients}><Image src={'/next.png'} alt="freelance" width={96} height={96} ></Image></motion.div>
       <motion.div variants={itemVarients}><Image src={'/html.png'} alt="freelance" width={96} height={96} ></Image></motion.div>
        
        </motion.section>
        </>
  )
}

export default AboutBottomImage
