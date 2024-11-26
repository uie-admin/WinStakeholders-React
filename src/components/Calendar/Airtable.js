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
      displayedDate1: record.fields.DisplayedDate1,
      weekEvenLab2: record.fields.WeekEvenLab2,
      displayedDate2: record.fields.DisplayedDate2,
      // date: record.fields.Date,
      
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
      displayedDate1: record.fields.DisplayedDate1,
      weekEvenLab2: record.fields.WeekEvenLab2,
      displayedDate2: record.fields.DisplayedDate2,
      // date: record.fields.Date,
      
    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};