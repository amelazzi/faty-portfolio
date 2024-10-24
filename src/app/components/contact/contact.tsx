import React, { useRef, useState } from 'react'
import './contact.css'
import PlaceIcon from '@mui/icons-material/Place'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import FaxIcon from '@mui/icons-material/Fax'
import AddressMap from './map/map'

function Contact() {
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    return (
        <div className='section-container contact-section' id='contact'>
            <h1> Get in touch </h1>
            <div className='contact-container'>
                <div className='contact-form'>
                    <div className='fullname-container'>
                        <input placeholder='First Name' ref={firstNameRef} required/>
                        <input placeholder='Last Name' ref={lastNameRef} required/>
                    </div>
                    <input placeholder='Email' ref={emailRef} required/>
                    <textarea placeholder='Tape your message here ...' ref={messageRef} required/>
                    <button> Send Message </button>
                </div>
                <div className='contact-info'>
                    <div>
                        <h2>Where to find me</h2>
                        <div className='map-container'>
                            <AddressMap/>
                        </div>
                    </div>
                    <div>
                        <h2>Contacts</h2>
                        <div className='contacts'>
                            <div className='contact'>
                                <div className='contact-icon'> <PlaceIcon/> </div>
                                <p>Batiment 650, Campus Universitaire, Université Paris Saclay F-91190, Gif-sur-Yvette, France </p>
                            </div>
                            <div className='contact'>
                                <div className='contact-icon'> <EmailIcon/> </div>
                                <p>Fatiha.Sais@lri.fr </p>
                            </div>
                            <div className='contact'>
                                <div className='contact-icon'> <PhoneIcon/> </div>
                                <p>+33 (0) 1 69 15 68 42 </p>
                            </div>
                            <div className='contact'>
                                <div className='contact-icon'> <FaxIcon/> </div>
                                <p>+33 (0) 1 60 19 69 63</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact