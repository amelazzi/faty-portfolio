"use client"
import Sidebar from "./components/sidebar/sidebar"
import Home from './components/home/home'
import './page.css'
import ResearchTopics from "./components/research_topics/research-topics";
import Publications from "./components/publications/publications";

export default function Index() {
  return (
    <div className="portfolio-container">
      <Sidebar/>
      <main className="main-content">
        <Home/>
        <ResearchTopics/>
        <Publications/>
      </main>
    </div>
  );
}
