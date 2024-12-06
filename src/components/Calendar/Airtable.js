import axios from 'axios';

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const BASE_ID = process.env.REACT_APP_BASE_ID;
const TABLE_ID1 = process.env.REACT_APP_TABLE_ID_P1P2;
const TABLE_ID2 = process.env.REACT_APP_TABLE_ID_P3P8;

export const fetchData_P1P2 = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID1}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      id: record.fields.id,
      pillarTitle: record.fields.PillarTitle,
      pillarDesc: record.fields.PillarDesc,

      weekOddLab1: record.fields.WeekOddLab1,
      oddDateOutput: record.fields.OddDateOutput,
      oddDate1: record.fields.OddDate1,
      oddDate2: record.fields.OddDate2,
      
      weekEvenLab2: record.fields.WeekEvenLab2,
      evenDateOutput: record.fields.evenDateOutput,
      evenDate1: record.fields.EvenDate1,
      evenDate2: record.fields.EvenDate2,

    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};

export const fetchData_P3P8 = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID2}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      id: record.fields.id,
      pillarTitle: record.fields.PillarTitle,
      pillarDesc: record.fields.PillarDesc,

      weekOddLab1: record.fields.WeekOddLab1,
      oddDateOutput: record.fields.OddDateOutput,
      oddDate1: record.fields.OddDate1,
      oddDate2: record.fields.OddDate2,
      
      weekEvenLab2: record.fields.WeekEvenLab2,
      evenDateOutput: record.fields.EvenDateOutput,
      evenDate1: record.fields.EvenDate1,
      evenDate2: record.fields.EvenDate2,
      
    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};





export const formatToLocalTime = (dateString, includeTimezone = true, timezone = null) => {
  if (!dateString) return "N/A";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid date";

  // Use the local timezone if no timezone is provided
  const localTimezone = timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; // Fallback to UTC if no timezone is detected

  let formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: localTimezone, // Use local or passed timezone
    timeZoneName: includeTimezone ? 'short' : undefined
  }).format(date);

  // Remove the first space before AM/PM and make it lowercase
  formattedTime = formattedTime.replace(/ (\wM)/, match => match.toLowerCase().trim());

  // Remove minutes if they are ":00"
  formattedTime = formattedTime.replace(/(:00)/, '');

  return formattedTime;
};


export const timezones = [
  "UTC",
  "America/New_York", // EST
  "America/Los_Angeles", // PST
  "America/Chicago", // CST
  "America/Denver", // MST
  "America/Anchorage", // AKST
  "Europe/London", // GMT
  "Europe/Paris", // CET
  "Europe/Moscow", // MSK
  "Europe/Istanbul", // TRT
  "Africa/Cairo", // EET
  "Africa/Johannesburg", // SAST
  "Asia/Tokyo", // JST
  "Asia/Shanghai", // CST
  "Asia/Taipei", // HKT
  "Asia/Seoul", // KST
  "Asia/Kolkata", // IST
  "Asia/Dubai", // GST
  "Australia/Melbourne", // AEDT
  "Pacific/Auckland", // NZDT
  "Pacific/Fiji", // FJT
  "Pacific/Honolulu" // HST
];


export const timezoneDropdown = (selectedTimezone, setSelectedTimezone) => {
  return (
    <select 
      value={selectedTimezone} 
      onChange={(e) => setSelectedTimezone(e.target.value)}
    >
      {timezones.map((tz) => (
        <option key={tz} value={tz}>
          {tz}
        </option>
      ))}
    </select>
  );
};