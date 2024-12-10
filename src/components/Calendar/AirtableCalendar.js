import "./AirtableCalendar.css";
import React, { useState, useEffect } from "react";
import { fetchData_P1P2, fetchData_P3P8 } from "./Airtable.js";
import { formatToLocalTime, timezoneDropdown } from "./Airtable.js";
import { STARTING_DATE } from "../../const.js";
import playButton1 from "./playButton1.png";
import playButton2 from "./playButton2.png";
import calendarImage from "./calendar_image.png";

function AirtableCalendar() {
    const [expandedSections, setExpandedSections] = useState({});
    const [selectedTimezone, setSelectedTimezone] =
        useState("America/New_York"); // Default to EST

    const toggleDetails = (index) => {
        setExpandedSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    const [pillarData1, setEvents1] = useState([]);
    const [pillarData2, setEvents2] = useState([]);

    useEffect(() => {
        const loadEvents = async () => {
            const fetchedData1 = await fetchData_P1P2();
            const fetchedData2 = await fetchData_P3P8();

            // Sort pillarData1 and pillarData2 by an appropriate property
            const sortedData1 = fetchedData1.sort((a, b) => a.id - b.id); // Replace 'id' with the key that determines order
            const sortedData2 = fetchedData2.sort((a, b) => a.id - b.id); // Replace 'id' with the key that determines order

            setEvents1(sortedData1);
            setEvents2(sortedData2);
        };

        loadEvents();
    }, []);

    return (
        <div className="airtableCalendar">
          
          <div className='scheduleTitle'>


            
              <h1 className="title">Course Schedule</h1>
              
              
              
            

            
              <div className="courseSchedule-info">
                <img src={calendarImage} />
                <div className="courseSchedule-info-date">
                  <h3>Cohort: {STARTING_DATE[0].date}</h3>
                  <h3>Every session is hosted with two time options.</h3>
                </div>
              </div>

              <p>All times are currently listed in Eastern Time.</p>      

              <div className='timezone-container'>
                {timezoneDropdown(selectedTimezone, setSelectedTimezone)}
              </div>


            



          </div>

            
            <div className="pillarSchedule-column">
                <div className="pillarSchedule-text">Pillars 1 and 2</div>
                {pillarData1.map((event1, index) => {
                    return (
                        <div id="pillars1and2" className="test123" key={index}>
                            <div id="scheduleCard">
                                <div id="WeekNUM">
                                    <div
                                        className="headerTitle"
                                        onClick={() => toggleDetails(index)}
                                    >
                                        <div className="mobile-row">
                                            <img
                                                src={playButton1}
                                                className={`scheduleIconImg ${
                                                    expandedSections[index]
                                                        ? "rotated"
                                                        : ""
                                                }`}
                                                alt="playButton1"
                                            />
                                        </div>
                                        <div>{event1.pillarTitle}</div>
                                        <div className="clickDetails">
                                            Topic Details
                                        </div>
                                    </div>

                                    {expandedSections[index] && (
                                        <>
                                            <div className="topicDetails">
                                                {event1.pillarDesc}
                                            </div>
                                        </>
                                    )}

                                    <div
                                        id="pillarNumLab1"
                                        className="subTitle"
                                    >
                                        <div className="optionTitle optionTime">
                                            {event1.weekOddLab1}
                                        </div>
                                        <div className="optionTime">
                                            {event1.oddDateOutput} at{" "}
                                            {formatToLocalTime(
                                                event1.oddDate1,
                                                true,
                                                selectedTimezone
                                            )}
                                        </div>
                                        <div className="optionTime-hidden">
                                            or
                                        </div>
                                        <div className="optionTime">
                                            {event1.oddDateOutput} at{" "}
                                            {formatToLocalTime(
                                                event1.oddDate2,
                                                true,
                                                selectedTimezone
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        id="pillarNumLab2"
                                        className="subTitle"
                                    >
                                        <div className="optionTitle optionTime">
                                            {event1.weekEvenLab2}
                                        </div>
                                        <div className="optionTime">
                                            {event1.evenDateOutput} at{" "}
                                            {formatToLocalTime(
                                                event1.evenDate1,
                                                true,
                                                selectedTimezone
                                            )}
                                        </div>
                                        <div className="optionTime-hidden">
                                            or
                                        </div>
                                        <div className="optionTime">
                                            {event1.evenDateOutput} at{" "}
                                            {formatToLocalTime(
                                                event1.evenDate1,
                                                true,
                                                selectedTimezone
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div id="pillars3and8" className="pillarSchedule-column">
                <div className="pillarSchedule-text">Pillars 3 - 8</div>
                <div className="pillarSchedule-subtext">(These Pillars cycle and start in different orders)</div>
                {pillarData2.map((event2, index) => {
                    return (
                        <div className="test123" key={index + 0.1}>
                            <div id="scheduleCard">
                                <div id="WeekNUM">
                                    <div
                                        className="headerTitle"
                                        onClick={() =>
                                            toggleDetails(index + 0.1)
                                        }
                                    >
                                        <div className="mobile-row">
                                            <img
                                                src={playButton2}
                                                className={`scheduleIconImg ${
                                                    expandedSections[
                                                        index + 0.1
                                                    ]
                                                        ? "rotated"
                                                        : ""
                                                }`}
                                                alt="playButton2"
                                            />
                                        </div>
                                        <div>{event2.pillarTitle}</div>
                                        <div className="clickDetails">
                                            Topic Details
                                        </div>
                                    </div>

                                    {expandedSections[index + 0.1] && (
                                        <>
                                            <div className="topicDetails">
                                                {event2.pillarDesc}
                                            </div>
                                        </>
                                    )}

                                    <div
                                        id="pillarNumLab1"
                                        className="subTitle"
                                    >
                                        <div className="optionTitle optionTime">
                                            {event2.weekOddLab1}
                                        </div>
                                        <div className="optionTime">
                                            {event2.oddDateOutput} at{" "}
                                            {formatToLocalTime(
                                                event2.oddDate1,
                                                true,
                                                selectedTimezone
                                            )}
                                        </div>
                                        <div className="optionTime-hidden">
                                            or
                                        </div>
                                        <div className="optionTime">
                                            {event2.oddDateOutput} at{" "}
                                            {formatToLocalTime(
                                                event2.oddDate2,
                                                true,
                                                selectedTimezone
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        id="pillarNumLab2"
                                        className="subTitle"
                                    >
                                        <div className="optionTitle optionTime">
                                            {event2.weekEvenLab2}
                                        </div>
                                        <div className="optionTime">
                                            {event2.evenDateOutput} at{" "}
                                            {formatToLocalTime(
                                                event2.evenDate1,
                                                true,
                                                selectedTimezone
                                            )}
                                        </div>
                                        <div className="optionTime-hidden">
                                            or
                                        </div>
                                        <div className="optionTime">
                                            {event2.evenDateOutput} at{" "}
                                            {formatToLocalTime(
                                                event2.evenDate2,
                                                true,
                                                selectedTimezone
                                            )}
                                        </div>
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
