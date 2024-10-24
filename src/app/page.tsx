"use client"
import Sidebar from "./components/sidebar/sidebar"
import Home from './components/home/home'
import './page.css'
import ResearchTopics from "./components/research_topics/research-topics";
import Publications from "./components/publications/publications";
import Talks from "./components/talks/talks";
import Image from 'next/image';
import FooterImage from "../../public/images/footer-image.svg"
import Contact from "./components/contact/contact";

export default function Index() {
  return (
      <div className="portfolio-container">
        <Sidebar/>
        <main className="main-content">
          <Home/>
          <ResearchTopics/>
          <Publications/>
          <Talks/>
          <div className="footer-image">
            <Image src={FooterImage} className='picture' alt="Profile Picture"/>
          </div>
          <Contact/>
        </main>
      </div>
  );
}
