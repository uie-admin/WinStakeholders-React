import "./NextCohortStarts.css";
import { STARTING_DATE } from "../../const.js";

function NextCohortStarts() {
    return (
        <div
            id="nextCohortStarts"
            className="startingDate text-center text-white"
        >
            Next cohort starts: <strong>{STARTING_DATE[0].date}</strong>
        </div>
    );
}

export default NextCohortStarts;
