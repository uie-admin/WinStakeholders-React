import "./RecordingTestimonial.css";
import { TESTIMONIAL_VIDEO } from "../../const.js";

function RecordingTestimonial() {
    return (
        <div id="RecordingTestimonial" className="bg-black">
            <div className="pb-3">
                <h1 className="loud-voice text-white text-center font-mogan">
                    On the fence?
                </h1>
                <h2 className="attention-voice text-white text-center font-mogan">
                    Hear from a program graduate:
                </h2>
            </div>

            {/* Vimeo Embed */}
            <div className="video-container container-cc">
                <iframe
                    src={TESTIMONIAL_VIDEO[0].link}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title={TESTIMONIAL_VIDEO[0].gradName}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                    }}
                ></iframe>
            </div>

            <p className="text-white text-center container-cc">
                Thank you <strong>{TESTIMONIAL_VIDEO[0].gradName}</strong> for
                being a part of our program!
            </p>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
    );
}

export default RecordingTestimonial;
