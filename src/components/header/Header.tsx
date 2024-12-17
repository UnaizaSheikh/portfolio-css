'use client';
import React from 'react';
import styles from './Header.module.css';
import  {caveatFont, interFont}  from '@/font';
import Link from 'next/link';
import { TiThMenu } from "react-icons/ti";
import { IoCloseCircle } from "react-icons/io5";
import { AnimatePresence, motion } from 'framer-motion';


const Header = () => {

  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
    <header className={styles.header}>
    <nav className={styles.nav}>
        <h1 className={caveatFont .className}>Unaiza Sheikh</h1> 
        <AnimatePresence>
        {menuOpen == true ? (
          <motion.ul className={`${interFont.className} ${styles.navUl} ${styles.active}`}
            key={'active'}
            initial={{opacity:0, width:0}}
            animate={{opacity:1, width:'40%'}}
            transition={{duration: 2, type:'spring'}}
            exit={{opacity:0, width:0}}>
           
               <IoCloseCircle size={30} className={styles.close} onClick={() => {setMenuOpen(!menuOpen)}}/>
          <li><Link href={'#'}>Home</Link></li>
          <li><Link href={'#'}>About</Link></li>
          <li><Link href={'#'}>Portfolio</Link></li>
          <li><Link href={'#'}>Services</Link></li>
          <li><Link href={'#'}>Testimonials</Link></li>
          <li><Link href={'#'}>Contact</Link></li>
      </motion.ul>
        ) 
        : 
        (
          <ul className={`${interFont.className} ${styles.navUl}`}>

          <li><Link href={'#'}>Home</Link></li>
          <li><Link href={'#'}>About</Link></li>
          <li><Link href={'#'}>Portfolio</Link></li>
          <li><Link href={'#'}>Services</Link></li>
          <li><Link href={'#'}>Testimonials</Link></li>
          <li><Link href={'#'}>Contact</Link></li>
      </ul>
        )}
        </AnimatePresence>
    

        <TiThMenu size={30} className={styles.menu} onClick={() => {setMenuOpen(!menuOpen)}}/>
    </nav>
    </header>
    </>
  )
}

export default Header