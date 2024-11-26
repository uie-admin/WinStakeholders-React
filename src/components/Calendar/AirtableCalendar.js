import './AirtableCalendar.css';
import React, { useState, useEffect } from 'react';
import { fetchData_P1P2 } from './Airtable.js';
import { fetchData_P3P8 } from './Airtable.js';
import playButton1 from './playButton1.png'
import playButton2 from './playButton2.png'

function AirtableCalendar() {
  const [expandedSections, setExpandedSections] = useState({});
  const toggleDetails = (index) => {
      setExpandedSections(prevState => ({
          ...prevState,
          [index]: !prevState[index]
      }));
  };
  const [pillarData1, setEvents1] = useState([]);
  const [pillarData2, setEvents2] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const fetchedData1 = await fetchData_P1P2();
      const fetchedData2 = await fetchData_P3P8();
      setEvents1(fetchedData1.reverse());
      setEvents2(fetchedData2.reverse());
    };
    
    loadEvents();
  }, []);

  return (
    <div className="airtableCalendar">
    <div className="pillarSchedule-column">
    <div className="pillarSchedule-text">Pillars 1 and 2</div>
    {pillarData1.map((event1, index) => {
      return (
          <div id='pillars1and2' className='test123' key={index}>
              <div id='scheduleCard'>
                  <div id='WeekNUM'>
                      
                    <div className='headerTitle' onClick={() => toggleDetails(index)}>
                      <div className='mobile-row'>
                        <img src={playButton1} className={`scheduleIconImg ${expandedSections[index] ? 'rotated' : ''}`} alt='playButton1' />
                      </div>
                      <div>{event1.pillarTitle}</div>
                      <div className='clickDetails'>Topic Details</div>
                    </div>

                    {expandedSections[index] && (
                      <>
                        <div className='topicDetails'>{event1.pillarDesc}</div>
                      </>
                    )}

                    <div id='pillarNumLab1' className='subTitle'>
                      <div className='optionTitle'>{event1.weekOddLab1}</div>
                      <div className='optionTime'>Wed, {event1.displayedDate1} at 11am ET</div>
                      <div className=''>or</div>
                      <div className='optionTime'>Wed, {event1.displayedDate1} at 6pm ET</div>
                    </div>
                    <div id='pillarNumLab2' className='subTitle'>
                      <div className='optionTitle'>{event1.weekEvenLab2}</div>
                      <div className='optionTime'>Wed, {event1.displayedDate2} at 11am ET</div>
                      <div className=''>or</div>
                      <div className='optionTime'>Wed, {event1.displayedDate2} at 6pm ET</div>
                    </div>

                  </div>
              </div>
          </div>
      );
    })}
    </div>

    <div id='pillars3and8' className="pillarSchedule-column">
    <div className="pillarSchedule-text">Pillars 3 - 8</div>
    {pillarData2.map((event2, index) => {
      return (
          <div className='test123' key={index + 0.1}>
              <div id='scheduleCard'>
                  <div id='WeekNUM'>
                    <div className='headerTitle' onClick={() => toggleDetails(index + 0.1)}>
                      <div className='mobile-row'>
                        <img src={playButton2} className={`scheduleIconImg ${expandedSections[index + 0.1] ? 'rotated' : ''}`} alt='playButton2' />
                      </div>
                      <div>{event2.pillarTitle}</div>
                      <div className='clickDetails'>Topic Details</div>
                    </div>

                    {expandedSections[index + 0.1] && (
                      <>
                        <div className='topicDetails'>{event2.pillarDesc}</div>
                      </>
                    )}

                    <div id='pillarNumLab1' className='subTitle'>
                      <div className='optionTitle'>{event2.weekOddLab1}</div>
                      <div className='optionTime'>Wed, {event2.displayedDate1} at 11am ET</div>
                      <div className=''>or</div>
                      <div className='optionTime'>Wed, {event2.displayedDate1} at 6pm ET</div>
                    </div>
                    <div id='pillarNumLab2' className='subTitle'>
                      <div className='optionTitle'>{event2.weekEvenLab2}</div>
                      <div className='optionTime'>Wed, {event2.displayedDate2} at 11am ET</div>
                      <div className=''>or</div>
                      <div className='optionTime'>Wed, {event2.displayedDate2} at 6pm ET</div>
                    </div>

                  </div>
              </div>
          </div>
      );
    })}
    </div>
  </div>
  );
}

export default AirtableCalendar;
