import React from 'react'
import './home.css'
import Image from 'next/image'
import ProfilePicture from '../../../../public/images/profile-picture.svg'

function Home() {
  return (
   <div className='home-container' id='home'>
        <div className='home'>
            <div className='information'>
                <h1> Fatiha SAIS...</h1>
                <p> <b>Professor of Computer Science</b> at <b>Paris Saclay University</b>, 
                    affiliated to <b>LISN</b> Laboratory and CNRS UMR  9015 and <b>lead of LaHDAK</b> team of LISN 
                </p>
                <button> Let's talk with me </button>
            </div>
            <div className='picture-container'>
                <Image src={ProfilePicture} className='picture' alt="Profile Picture"/>
            </div>
        </div>
        <div className='stats-container'>
            <div className='stats'>
                <div className='stat'>
                    <h1> 15+ </h1>
                    <p> years of </p>
                    <h3> Experience </h3>
                </div>
                <hr/>
                <div className='stat'>
                    <h1> 60+ </h1>
                    <p> completed </p>
                    <h3> Publications </h3>
                </div>
                <hr/>
                <div className='stat'>
                    <h1> 17+ </h1>
                    <p> successful </p>
                    <h3> Talks </h3>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Home