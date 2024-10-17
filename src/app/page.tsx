import Sidebar from "./components/sidebar/sidebar"
import './page.css'

export default function Home() {
  return (
    <div className="portfolio-container">
      <Sidebar/>
      <main className="main-content">
        main sections
      </main>
    </div>
  );
}
