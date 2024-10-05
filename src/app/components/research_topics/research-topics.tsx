import React from "react";
import './research-topics.css'
import Topic from "./topic/topic";

function ResearchTopics() {
  return(
    <div className="section-container" id='research-topics'>
        <h1> Research Topics </h1>
        <div className="topics">
            <Topic number={1} title="Idendity management in the web of Data"/>
            <Topic number={2} title="Knowledge Graph Refinement"/>
            <Topic number={3} title="Key-base Data Linking"/>
            <Topic number={4} title="Rule Mining in Knowledge Graphs"/>
            <Topic number={5} title="Temporal Veracity Assessment in Knowledge Graphs"/>
            <Topic number={6} title="Data Fusion"/>
        </div>
    </div>
  )
}

export default ResearchTopics;
