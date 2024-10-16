import React, { useEffect, useState } from "react"
import './publications.css'
import Publication from "./publication/publication"
import { getCSV, TPublication } from "@/utils/csv-parser"

function Publications() {
  const [publications, setPublications] = useState<TPublication[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const csvData = await getCSV('/data/publications.csv');
        setPublications(csvData);
        const years = Array.from(new Set(csvData.map((pub) => pub.year))).sort((a, b) => b - a);
        setSelectedYear(years[0]);
      } catch (err) {
        console.log('Failed to load CSV data');
      }
    })();
  }, []);

  const groupedPublications = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, TPublication[]>);

  const years = Object.keys(groupedPublications).map(Number).sort((a, b) => b - a);

  return (
    <div className="section-container publications-section">
        <h1> Publications </h1>
        <div className="publications-container">
          <div className="timeline">
            {years.map((year) => (
              <div>
                <div
                  key={year}
                  className={`year-container ${selectedYear === year ? 'selected-year' : ''}`}
                  onClick={() => {
                    setSelectedYear(year)
                  }}
                >
                  {year}
                </div>
                <hr className="timeline-divider"/>
              </div>
            ))}
          </div>
          <div className="publications">
            {selectedYear
              ? groupedPublications[selectedYear].map((pub) => (
                  <Publication
                    key={pub.title}
                    title={pub.title}
                    conferenceName={pub.conference_name}
                    startDate={pub.start_date}
                    endDate={pub.end_date}
                    location={pub.location}
                  />
                ))
              : <div></div>}
          </div>
        </div>
    </div>
  )
}

export default Publications;
