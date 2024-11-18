// import './AirtableCalendar.css';
// import React, { useState, useEffect } from 'react';
// import { fetchData } from './Airtable.js';
// import DOMPurify from 'dompurify';

// function AirtableCalendar() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const loadEvents = async () => {
//       const fetchedData = await fetchData();
//       setEvents(fetchedData.reverse());
//     };
    
//     loadEvents();
//   }, []);

//   return (
//     <div className="airtableCalendar">
//       {events.length === 0 ? 
//       (<div className="airTableCalendar-none">No events available</div>) 
//       : // <---- this colon is very important
//       (<div className="airTableCalendar-exists">
//         {events.map((event, index) => (
//           <div className="airtableCalendar-container" key={index}>
//             <div className="topicTitle">
//               {/* <div>{event.num}</div> */}
//               <h2 className="pillarNum">{event.name} - {event.title}</h2>
//             </div>
//             <p><b>{event.date}</b> {event.start} - {event.end}</p>
//             <ul>
//               <li>{event.bullet1}</li>
//               <li>{event.bullet2}</li>
//               <li>{event.bullet3}</li>
//             </ul>
//             <a href={event.link}>{event.link}</a>
            
//             <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(event.rich) }} />
//           </div>
//         ))}
//       </div>
//       )}
//     </div>
//   );
// }

// export default AirtableCalendar;

import './AirtableCalendar.css';
import React, { useState, useEffect } from 'react';
import { fetchData } from './Airtable.js';
import ReactMarkdown from 'react-markdown'; // Import the react-markdown library

function AirtableCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const fetchedData = await fetchData();
      setEvents(fetchedData.reverse());
    };
    
    loadEvents();
  }, []);

  return (
    <div className="airtableCalendar">
      {events.length === 0 ? 
      (<div className="airTableCalendar-none">No events available</div>) 
      : 
      (<div className="airTableCalendar-exists">
        {events.map((event, index) => (
          <div className="airtableCalendar-container" key={index}>
            <div className="topicTitle">
              <h2 className="pillarNum">{event.name} - {event.title}</h2>
            </div>
            <p><b>{event.date}</b> {event.start} - {event.end}</p>
            <div className="topic-content">
              <ReactMarkdown>{event.rich}</ReactMarkdown> {/* Use ReactMarkdown to render rich text */}
            </div>
            <a href={event.link}>{event.link}</a>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default AirtableCalendar;
