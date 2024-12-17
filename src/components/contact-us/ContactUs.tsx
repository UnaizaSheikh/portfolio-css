'use client';
import React, {useState} from 'react'
import styles from './ContactUs.module.css';
import { caveatFont } from '@/font';
import { MdEmail } from "react-icons/md";
import { FaMapMarker } from "react-icons/fa";
import {sendEmail } from '@/components/utils/EmailService';


function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault();

    const templateParams = {
      to_name: 'Unaiza Sheikh',
      from_name:name,
      from_email:email,
      from_message:message

    };
    try{
      await sendEmail(templateParams);
        alert ("Email sent successfully")
        setName('')
        setEmail('')
        setMessage('')
        
    }
    catch(error){
      console.error(' Emailjs error', error);
      alert ("Failed to send Email")
    }
  }
  
  return (
    <>
    <section className={styles.contactUs}>
      <h1 className={caveatFont.className}>
        <span>C</span>ontact
        <span> M</span>e</h1>

        <p>i am available for freelance work. Contact me and let&apos;s get started.You 
          feels free to contact me<br/>My Expertise in frontened Development and aweb Application.</p>



          <div className={styles.contactUsbottomDiv}>

            <div className={styles.contactUsleftDiv}>
              <div className={styles.contactUsleftDivcontainer}> 
                

              <MdEmail size={24} color={"var(--logo-color)"}/>

              <div className={styles.contactUsleftDivText}>
                <h6>Have a question?</h6>
                <h6>I am here to help you</h6>
                <h6>Email me at unaizasheikh900@gmail.com</h6>
              </div>
              </div>
              <div className={styles.contactUsleftDivcontainer}>

               <FaMapMarker size={24} color={"var(--logo-color)"}/> 

              <div className={styles.contactUsleftDivText}>
                <h6>Current Location</h6>
                <h6>Karachi, Pakistan</h6>
                <h6>Serving Clients Worldwide</h6>
              </div>
              </div>
              <div className={styles.contactUsRightDiv}>

              </div>
              </div>
              <div className={styles.contactUsRightDiv}>
                <form onSubmit={handleSubmit}>
                 <div className={styles.topInputDiv}>
                  <input type="text" placeholder='Your name' className={styles.inputDetails} 
                  name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
                  <input type="text" placeholder='Your email' className={styles.inputDetails}
                  name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                
                 </div>
                 <input type="text" placeholder='Subject' className={styles.inputDetails}/>
                 <textarea placeholder='Your message' className={styles.inputDetails}
                 name='message' value={message} onChange={(e)=>setMessage(e.target.value)} style={{height:"224px"}}></textarea>
                 
                 <input type="submit" className={styles.inputBtn} value={"Send message"}/>
                </form>

              </div>
            </div>
          
    </section>
    </>
  )
}

export default ContactUs