import React, { useRef, useState } from 'react'
import './contact.css'
import PlaceIcon from '@mui/icons-material/Place'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import FaxIcon from '@mui/icons-material/Fax'
import AddressMap from './map/map'
import Alert, { AlertColor } from '@mui/material/Alert'
import { CircularProgress, Snackbar } from '@mui/material'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Contact() {
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const [alertStatus, setAlertStatus] = useState<AlertColor>('success')
    const [alertMessage, setAlertMessage] = useState('')

    const [showAlert, setShowAlert] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    function isValidEmail(email: string) {
        return EMAIL_REGEX.test(email);
      }

    const valideForm = () => {
        if(!firstNameRef.current!.value || !lastNameRef.current!.value || !emailRef.current!.value || !messageRef.current!.value){
            return false
        }
        return true
    }

    function displayAlert(status: AlertColor, message: string){
        setShowAlert(true)
        setAlertStatus(status)
        setAlertMessage(message)
    }

    const sendEmail = () => {
        if(!valideForm()){
            displayAlert('error', 'Please complete the missing information')
            return false
        }

        if(!isValidEmail(emailRef.current!.value)){
            displayAlert('error', 'Please enter a valid email address')
            return false
        }

        setIsLoading(true)

        const emailData = {
            sender: {
                name: 'Portfolio contact',
                address: process.env.NODEMAILER_SENDER_EMAIL
            },
            recipient: {
                name: 'Amel AZZI',
                address: 'ea_azzi@esi.dz'
            },
            message: `<p><strong>firstName:</strong> ${firstNameRef.current!.value}</p>
                    <p><strong>lastName:</strong> ${lastNameRef.current!.value}</p>
                    <p><strong>email:</strong> ${emailRef.current!.value}</p>
                    <p><strong>message:</strong> ${messageRef.current!.value}</p>`
        }
        
        fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify(emailData),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(() => {
            displayAlert('success', 'Your email has been sent successfully!')
        })
        .catch(error => {
            console.log('error: ', error)
            displayAlert('error', 'Failed to send email. Please try again later.')
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

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
                    <button onClick={sendEmail}> {isLoading ? <CircularProgress size={32} color='while'/> : 'Send Message'} </button>
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
                                <p>Batiment 650, Campus Universitaire, Université Paris Saclay F-91190, Gif-sur-Yvette, France</p>
                            </div>
                            <div className='contact'>
                                <div className='contact-icon'> <EmailIcon/> </div>
                                <p>Fatiha.Sais@lri.fr</p>
                            </div>
                            <div className='contact'>
                                <div className='contact-icon'> <PhoneIcon/> </div>
                                <p>+33 (0) 1 69 15 68 42</p>
                            </div>
                            <div className='contact'>
                                <div className='contact-icon'> <FaxIcon/> </div>
                                <p>+33 (0) 1 60 19 69 63</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar open={showAlert} autoHideDuration={4000} onClose={() => {setShowAlert(false)}}>
                <Alert className="alert" severity={alertStatus}>{alertMessage}</Alert>
            </Snackbar>
        </div>
    )
}

export default Contact