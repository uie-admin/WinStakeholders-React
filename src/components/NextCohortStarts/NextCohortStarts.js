import "./NextCohortStarts.css";
import { STARTING_DATE } from "../../const.js";

function NextCohortStarts() {
    return (
        <h2
            id="nextCohortStarts"
            className="startingDate text-center text-white"
        >
            Next cohort starts: <strong>{STARTING_DATE[0].date}</strong>
        </h2>
    );
}

export default NextCohortStarts;
