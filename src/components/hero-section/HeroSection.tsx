'use client';
import React from 'react'
import styles from './Herosection.module.css'
import { interFont } from '@/font'
import Button from '../Button/Button'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiTelegram } from "react-icons/si";
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter'


const Herosection = () => {
  return (
    <>
    <section className={`${styles.hero} ${interFont.className}`}>
       <h1>Hey I&apos;m {" "}<span>Unaiza Sheikh </span><br/>

       <span>I</span>&apos;m {" "}
       <Typewriter words={[' A Front End Web Developer','UI/UX Designer','Next JS Developer']}
        loop={Infinity}
         cursor={true}
          cursorStyle='_' 
          typeSpeed={80} 
          deleteSpeed={50}
           delaySpeed={1500} />
           
       
       </h1>
       <p>A passion for creating user-friendly Websites and applications with {" "}
        <span> React JS</span> and {" "} 
        <span>Next JS</span>
        <br />I Love the Front End Development</p>
        <Button text={"Hire Me"}/>

        <div className={styles.SocialIcons}>
        <FaFacebookF size={30} color='black' />
        <FaXTwitter size={30} color='black'/>
        <FaSquareInstagram size={30} color='black' />
        <IoLogoWhatsapp size={30} color='black' />
        <SiTelegram size={30} color='black' />
        </div>
        <div className={styles.bottomImageDiv}>
          <Image src={"/behance.png"} alt="behance" width={156} height={156} ></Image>
          <Image src={"/dribble.png"} alt="dribble" width={156} height={156} ></Image>
        <Image src={"/upwork.png"} alt="upwork" width={156} height={156} ></Image>
        
          <Image src={"/freelance.png"} alt="freelance" width={156} height={156} ></Image>
          
        </div>

    </section>
        </>
  )
}

export default Herosection