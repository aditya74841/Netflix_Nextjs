import Link from 'next/link'
import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from './contact.module.css'
import ContactForm from '../components/ContactForm'


const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us </h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>We'd love to hear <span>from you</span></h2>

          <ContactForm />
        </section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14367.483745005984!2d85.4202781290374!3d25.8078316694148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed7020f946f169%3A0xff87ba7f886efcbf!2sKushar%20Khas%2C%20Bihar!5e0!3m2!1sen!2sin!4v1692118379627!5m2!1sen!2sin" width={800} height={600} style={{border:0}} className={styles.mapping} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>

  )
}

export default Contact