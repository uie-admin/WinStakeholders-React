import "./Landing.css";
import LandingImg from "../../images/landing.png";
import NextCohortStarts from "../NextCohortStarts/NextCohortStarts.js";
import { LANDING } from "../../const.js";

function Landing() {
    return (
        <div className="bg-black py-4">
            <div className="container-cc">
                <picture className="landing-logo centercenter">
                    <img
                        className="img-resp"
                        src={LANDING[0].src}
                        alt={LANDING[0].alt}
                    />
                </picture>
                <NextCohortStarts />
            </div>
        </div>
    );
}

export default Landing;
