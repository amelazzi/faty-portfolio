import Sidebar from "./components/sidebar/sidebar"
import Home from './components/home/home'
import './page.css'

export default function Index() {
  return (
    <div className="portfolio-container">
      <Sidebar/>
      <main className="main-content">
        <Home/>
      </main>
    </div>
  );
}
