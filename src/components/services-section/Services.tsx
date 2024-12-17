import React from "react";
import styles from "./Services.module.css";
import { caveatFont, interFont } from "@/font";

import ServicesCard from "./services-card/ServicesCard";

function Services() {
  return (
    <>
      <section className={styles.services}>
        <h1 className={caveatFont.className}>
          <span>W</span>hat <span>I</span> <span>D</span>o <span>F</span>or{" "}
          <span>C</span>lients
        </h1>

        <p className={interFont.className}>
          I am a passionate web developer with a knack for crafting elegant and
          user-friendly websites.,
          <br />I specialize in creating visually interactive web experiences.
        </p>
        <div className={styles.servicesCardDiv}>
          <ServicesCard />
            
          
          
        </div>
      </section>
    </>
  );
}

export default Services;