"use client"

import React, { useState } from 'react'
import styles from '@/app/contact/contact.module.css'
import { Mulish } from 'next/font/google'

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
})



const ContactForm = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: "",
    })

    const [status, setStatus] = useState(null)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        //  setUser((prevUser:{...})=>({...prevUser,[name]value}))
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
            })
            if (response.status === 200) {
                setUser({
                    username: '',
                    email: '',
                    phone: '',
                    message: ''
                })
                setStatus('sucesss');
            }
            else {
                setStatus('error');
            }
        } catch (e) {
            console.log(e);
        }


    }


    return (
        <>
            <form className={styles.contact_form} onSubmit={handleSubmit}>
                <div className={styles.input_field}>
                    <label htmlFor='username' className={styles.label}>
                        Enter Your Name:
                        <input type='text' name='username' id='username' placeholder='Enter your name' className={mulish.className}
                            value={user.username}
                            onChange={handleChange}
                            autoComplete='off'
                            required
                        />
                    </label>
                </div>

                <div className={styles.input_field}>
                    <label htmlFor='email' className={styles.label}>
                        Enter Your Email:
                        <input type='text' name='email' id='email' placeholder='Enter your email ' className={mulish.className}
                            value={user.email}
                            onChange={handleChange}
                            autoComplete='off'
                            required

                        />
                    </label>
                </div>
                <div className={styles.input_field}>
                    <label htmlFor='number' className={styles.label}>
                        Enter Your Phone:
                        <input type='text' name='phone' id='phone' placeholder='Enter your name' className={mulish.className}
                            value={user.phone}
                            onChange={handleChange}
                            autoComplete='off'
                            required
                        />
                    </label>
                </div>
                <div className={styles.input_field}>
                    <label htmlFor='message' className={styles.label}>
                        Message:
                        <textarea type='text' rows={5} name='message' id='message' placeholder='Enter your Message' className={mulish.className}
                            value={user.message}
                            onChange={handleChange}
                            autoComplete='off'
                            required
                        />
                    </label>
                </div>
                <div>

                    {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                    {status === 'error' && <p className={styles.success_msg}>There was an error submitting your message!</p>}
                    <button type='submit' className={mulish.className}> Send Message</button>
                </div>
            </form>
        </>
    )
}

export default ContactForm