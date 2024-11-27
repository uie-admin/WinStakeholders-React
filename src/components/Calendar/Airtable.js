import axios from "axios";

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const BASE_ID = process.env.REACT_APP_BASE_ID;
const TABLE_ID = process.env.REACT_APP_TABLE_ID_WIN_CALENDAR;

console.log("API key:", AIRTABLE_API_KEY);
export const fetchData = async () => {
    const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`;
    const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

    try {
        const response = await axios.get(url, { headers });
        return response.data.records.map((record) => ({
            pillarName: record.fields.PillarSection,
            displayedDate: record.fields.DisplayedDate,
            // date: record.fields.Date,
        }));
    } catch (error) {
        console.error("Error fetching data from Airtable", error);
        return [];
    }
};
