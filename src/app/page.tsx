import Sidebar from "./components/sidebar/sidebar"
import Home from './components/home/home'
import './page.css'
import ResearchTopics from "./components/research_topics/research-topics";

export default function Index() {
  return (
    <div className="portfolio-container">
      <Sidebar/>
      <main className="main-content">
        <Home/>
        <ResearchTopics/>
      </main>
    </div>
  );
}
