import "./Testimonials.css";
import OpenQuotation from "../../images/quotes.png";

function Testimonials1({ testimonyData }) {
    return (
        <div id="Testimonials1" className="bg-pink">
            <div className="container-cc py-2 mobile-align-start flex">
                <div className="text-white column basis50 testimonial divider">
                    <div className="pr-3">
                        <img
                            src={testimonyData[0].img}
                            className="img-resp image-left imgTestimonial"
                            alt="Describe a picture"
                        />
                        <div className="testimonial-title">
                            <h2>
                                <img className="quote" src={OpenQuotation} />
                                {testimonyData[0].title}:
                            </h2>
                        </div>
                        <p>
                            <em>{testimonyData[0].desc}</em>
                        </p>
                    </div>
                </div>

                <div className="text-white column basis50 testimonial left-padding">
                    <div className="pl-3">
                        <img
                            src={testimonyData[1].img}
                            className="img-resp image-left imgTestimonial"
                            alt="Describe a picture"
                        />
                        <div className="testimonial-title">
                            <h2>
                                <img className="quote" src={OpenQuotation} />
                                {testimonyData[1].title}:
                            </h2>
                        </div>
                        <p>
                            <em>{testimonyData[1].desc}</em>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials1;
