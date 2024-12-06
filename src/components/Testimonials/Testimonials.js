import "./Testimonials.css";
import OpenQuotation from "../../images/quotes.png";

function Testimonials1({ testimonyData }) {
    return (
        <div id="Testimonials1" className="bg-pink">
            <div className="container-cc testimonial-container">
                <div className="text-white text-column column-left">
                    <div>
                        <img
                            src={testimonyData[0].img}
                            className="img-resp image-left imgTestimonial"
                            alt=""
                        />
                        <div className="testimonial-title">
                            <h2>
                                <img
                                    className="quote"
                                    src={OpenQuotation}
                                    alt="quotation mark"
                                />
                                {testimonyData[0].title}:
                            </h2>
                        </div>
                        <p>
                            <em>{testimonyData[0].desc}</em>
                        </p>
                    </div>
                </div>

                <hr className="divider" />

                <div className="text-white text-column column-right">
                    <div>
                        <img
                            src={testimonyData[1].img}
                            className="img-resp image-left imgTestimonial"
                            alt=""
                        />
                        <div className="testimonial-title">
                            <h2>
                                <img
                                    className="quote"
                                    src={OpenQuotation}
                                    alt="quotation mark"
                                />
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
