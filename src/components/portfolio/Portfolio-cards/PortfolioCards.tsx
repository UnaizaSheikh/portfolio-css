'use client';
import React from "react";
import styles from "./PortfolioCards.module.css";
import Image from "next/image";
import { PortfolioCards } from "../../constant/portfolioCard";
import Link from "next/link";
import {motion} from 'framer-motion';

function Portfoliocards() {
  return (
    <>
      {PortfolioCards.map((item, index) => {
        return (
          <motion.div className={styles.card} key={index}
          initial={{opacity:0, scale:0}} 
          whileInView={{opacity:1, scale:1}}
          transition={{duration:1}}>
            <Link href={item.href} >
            <div className={styles.cardImage}>
              {item.type == "image" ? (
                <Image
                  src={item.src}
                  alt="cards"
                  width={407}
                  height={407}
                  className={styles.img}
                />
              ) : (
                <video src={item.src} controls autoPlay loop muted></video>
              )}
            </div>
            </Link>
            <div className={styles.cardText}>{item.title}</div>
          </motion.div>
        );
      })}

      
    </>
  );
}









export default Portfoliocards;