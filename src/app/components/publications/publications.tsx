import React, { useEffect, useState } from "react"
import './publications.css'
import { getCSV, TCard } from "@/utils/csv-parser"
import Card from "../card/card"

function Publications() {
  const [publications, setPublications] = useState<TCard[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  
  useEffect(() => {
    (async () => {
      try {
        const csvData = await getCSV('/data/publications.csv');
        setPublications(csvData);
        const years = Array.from(new Set(csvData.map((pub) => pub.year))).sort((a, b) => b - a);
        setYears(years)
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
  }, {} as Record<number, TCard[]>);

  return (
    <div className="section-container publications-section" id="publications">
        <h1> Publications </h1>
        <div className="publications-container">
          <div className="timeline-container">
            <div className="timeline">
              {years.map((year) => (
                <div key={year}>
                  <div className={`year-container ${selectedYear === year ? 'selected-year' : ''}`}
                    onClick={() => {setSelectedYear(year)}}>
                    {year}
                  </div>
                  <hr className="timeline-divider"/>
                </div>
              ))}
            </div>
          </div>
          <div className="publications">
            {selectedYear
              ? groupedPublications[selectedYear].map((pub) => (
                  <Card
                    key={pub.title}
                    width={345}
                    title={pub.title}
                    conferenceName={pub.conference_name}
                    startDate={pub.start_date}
                    endDate={pub.end_date}
                    location={pub.location}
                  />
                ))
              : ''}
          </div>
        </div>
    </div>
  )
}

export default Publications;
