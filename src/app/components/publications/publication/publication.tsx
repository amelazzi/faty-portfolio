import React from "react"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import DateRangeIcon from '@mui/icons-material/DateRange'
import PlaceIcon from '@mui/icons-material/Place'
import './publication.css'

function Publication() {
  return (
    <div className="publication">
        <div className="card-title">
            <div className="card-overlay">
                Generating Referring Expressions from RDF Knowledge Graphs for Data Linking
            </div>
        </div>
        <div className="card-information">
            <div className='card-text'>
                <div className='card-icon'>
                    <AccountBalanceIcon/>
                </div>
                <p> International Semantic Web Conference </p>
            </div>
            <div className='card-text'>
                <div className='card-icon'>
                    <DateRangeIcon/>
                </div>
                <p> November 2-6, 2020 </p>
            </div>
            <div className='card-text'>
                <div className='card-icon'>
                    <PlaceIcon/>
                </div>
                <p> Athens, Greece </p>
            </div>
        </div>
    </div>
  )
}

export default Publication;
