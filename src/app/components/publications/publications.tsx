import React from "react"
import './publications.css'
import Publication from "./publication/publication";

function Publications() {
  return (
    <div className="section-container publications-section">
        <h1> Publications </h1>
        <div className="publications-container">
            <div className="timeline">
                <div className="year-container"> 2020 </div>
                <div className="year-container"> 2020 </div>
            </div>
            <div className="publications">
                <Publication/>
                <Publication/>
                <Publication/>
                <Publication/>
                <Publication/>
                <Publication/>
            </div>
        </div>
    </div>
  )
}

export default Publications;
