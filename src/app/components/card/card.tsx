import React, { useState, useRef, useEffect } from "react"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import DateRangeIcon from '@mui/icons-material/DateRange'
import PlaceIcon from '@mui/icons-material/Place'
import './card.css'

function Card({ width, title, conferenceName, startDate, endDate, location  }: 
    { width: number, title: string, conferenceName:string, startDate: Date, endDate: Date, location: string }) {
    
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const divElement = cardRef.current;
        if (divElement) {
            const handleMouseEnter = () => { setIsHovered(true)}
            const handleMouseLeave = () => { setIsHovered(false)}
        
            divElement.addEventListener('mouseenter', handleMouseEnter)
            divElement.addEventListener('mouseleave', handleMouseLeave)
        
            return () => {
                divElement.removeEventListener('mouseenter', handleMouseEnter)
                divElement.removeEventListener('mouseleave', handleMouseLeave)
            };
        }
    }, []);

    return (
        <div className="card" style={{width: `${width}px`}} ref={cardRef}>
            <div className="card-title">
                <div className={`card-overlay ${isHovered ? 'card-hover' : ''}`}>
                    {title}
                </div>
            </div>
            <div className="card-information">
                <div className='card-text'>
                    <div className='card-icon'>
                        <AccountBalanceIcon/>
                    </div>
                    <p> {conferenceName} </p>
                </div>
                <div className='card-text'>
                    <div className='card-icon'>
                        <DateRangeIcon/>
                    </div>
                    <p> from {startDate.toString()} to {endDate.toString()} </p>
                </div>
                <div className='card-text'>
                    <div className='card-icon'>
                        <PlaceIcon/>
                    </div>
                    <p> {location} </p>
                </div>
            </div>
        </div>
    )
}

export default Card;
