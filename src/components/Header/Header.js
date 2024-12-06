import "./Header.css";
import LogoBlack from "../../images/CC-UIE-black-logo.png";

function Navbar() {
    return (
        <div id="Header" className="bg-lightGray">
            <div className="topbar container-cc">
                <picture className="header-logo">
                    <img
                        className="img-resp"
                        alt="centerCentre"
                        src={LogoBlack}
                    />
                </picture>

                <div className="enroll-btn-container">
                    <a
                        className="btn btn-custom btn-shadow"
                        href="#PurchasePlans"
                    >
                        Enroll Now
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
