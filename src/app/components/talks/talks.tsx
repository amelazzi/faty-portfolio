import React, { useEffect, useState } from 'react'
import './talks.css'
import Card from '../card/card'
import { getCSV, TCard } from '@/utils/csv-parser';

function Talks() {
  const [talks, setTalks] = useState<TCard[]>([]);
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const csvData = await getCSV('/data/talks.csv');
        setTalks(csvData);
        const years = Array.from(csvData.map((talk) => talk.year));
        setYears(years)
      } catch (err) {
        console.log('Failed to load CSV data');
      }
    })();
  }, []);

  return (
    <div className='section-container talks-section' id='talks'>
        <h1>Talks</h1>
        <div className='talks-container'>
          <div className='talks-timeline'>
            {years.map((year, index) => (
              <div key={index}>
                <div className='talk-year'>{year}</div>
                <hr className="year-divider"/>
              </div>
            ))}
          </div>
          {talks.map((talk, index) => (
            <div key={index} className={`talk-container ${ index % 2 === 0 ? 'left' : 'right'}`}>
              <Card
                width={500}
                title={talk.title}
                conferenceName={talk.conference_name}
                startDate={talk.start_date}
                endDate={talk.end_date}
                location={talk.location}
              />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Talks