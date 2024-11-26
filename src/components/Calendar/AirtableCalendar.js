import './AirtableCalendar.css';
import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { fetchData } from './Airtable.js';
import { fetchData_P3P8 } from './Airtable.js';
import { EIGHT_PILLARS } from '../../const.js';
import ReactMarkdown from 'react-markdown'; // Import the react-markdown library

function AirtableCalendar() {
  const [expandedSections, setExpandedSections] = useState({});
  // const location = useLocation();
  const toggleDetails = (index) => {
      setExpandedSections(prevState => ({
          ...prevState,
          [index]: !prevState[index]
      }));
  };
  // const containerClass = location.pathname !== '/' ? 'calendar-container' : '';
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const fetchedData = await fetchData();
      setEvents(fetchedData);
    };
    
    loadEvents();
  }, []);

  return (
    <div className="airtableCalendar">

  {events.map((event, index) => {
    return (
        <div className='test123' key={index}>
            <div id='scheduleCard'>
                <div id='WeekNUM'>
                    <div className='weekInfo'>Week {event.week} of 4</div>

                    {/* Odd Numbered Topic */}
                    <div id='oddTopicNumber' className='headerTitle' onClick={() => toggleDetails(index)}>
                        <div className='mobile-row'>
                            <img className={`scheduleIconImg ${expandedSections[index] ? 'rotated' : ''}`} alt='playButton1' />
                            
                        </div>
                        {/* <div className="pillarTitle"> */}
                            <div>Pillar 1: Become the UX Leader Your Org is Seeking</div>
                            <div className='clickDetails'>Topic Details</div>
                        {/* </div> */}
                    </div>

                    {expandedSections[index] && (
                        <>
                            <div className='topicDetails'>
                              {/* EIGHT_PILLARS.desc */}
                                <ReactMarkdown>{event.rich1}</ReactMarkdown>
                            </div>
                        </>
                    )}

                    <div id='pillarNumLab1' className='subTitle'>
                      <div className='classTitle'>{event.pillarName}</div>
                      <div className='optionTime'>Wed, {event.displayedDate} at 11am ET</div>
                      <div className='optionTitle'>or</div>
                      <div className='optionTime'>Wed, {event.displayedDate} at 6pm ET</div>
                    </div>
                    <div id='pillarNumLab2' className='subTitle'>
                      <div className='classTitle'>{event.pillarName}</div>
                      <div className='optionTime'>Wed, {event.displayedDate} at 11am ET</div>
                      <div className='optionTitle'>or</div>
                      <div className='optionTime'>Wed, {event.displayedDate} at 6pm ET</div>
                    </div>

                    {/* END Odd Numbered Topic */}





                    {/* START Even Numbered Topic */}
                    <div id='oddTopicNumber' className='headerTitle' onClick={() => toggleDetails(index + 0.1)}>
                        <div className='mobile-row'>
                            <img className={`scheduleIconImg ${expandedSections[index + 0.1] ? 'rotated' : ''}`} alt='playButton2' />
                            <div className='classTitle'>{event.name2}</div>
                        </div>
                        <div>
                            <div className='clickDetails'>Topic Details</div>
                        </div>
                    </div>

                    {expandedSections[index + 0.1] && (
                        <>
                            <div className='topicDetails'>
                                <ReactMarkdown>{event.rich2}</ReactMarkdown>
                            </div>
                        </>
                    )}

                    <div id='optionalTitle' className='subTitle'>
                        <div className='optionTime'>{event.timeLecture2}</div>
                        <div className='optionTitle'>Watch the Lecture*</div>
                    </div>
                    <div id='liveTopicTitle' className='subTitle'>
                        <div className='optionTime'>{event.timeCoaching2}</div>
                        <div className='optionTitle'>Live Coaching with Jared</div>
                    </div>
                    {/* END Even Numbered Topic */}

                </div>
            </div>
        </div>
    );
  })}



    </div>
  );
}

export default AirtableCalendar;
