import React from "react";
import './topic.css'

const Topic = ({ number, title }: { number: number, title: string}) => {
  return (
    <div className="container">
      <div className="topic-container">
        <div className="number-container"> 0{number} </div>
        <div className="title"> {title} </div>
      </div>
      <hr className="divider"/>
    </div>
  )
}

export default Topic;
