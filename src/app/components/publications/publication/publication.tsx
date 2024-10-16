import React from "react"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import DateRangeIcon from '@mui/icons-material/DateRange'
import PlaceIcon from '@mui/icons-material/Place'
import './publication.css'

function Publication({ title, conferenceName, startDate, endDate, location  }: { title: string, conferenceName:string, startDate: Date, endDate: Date, location: string }) {
  return (
    <div className="publication">
        <div className="card-title">
            <div className="card-overlay">
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

export default Publication;
