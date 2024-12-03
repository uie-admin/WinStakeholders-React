import "./IntroStatement.css";
import { INTRO_STATEMENT } from "../../const.js";

function IntroStatement() {
    return (
        <div id="IntroStatement">
            <div id="introStatementA" className="bg-lightGray">
                <div className="introStatementFormat container-cc py-1">
                    <div className="column basis70">
                        <h2 className="py-1">{INTRO_STATEMENT[0].span}</h2>
                        <p>{INTRO_STATEMENT[0].desc}</p>
                    </div>

                    <div className="column basis30">
                        <img
                            src={INTRO_STATEMENT[0].src}
                            className="img-resp"
                            alt={INTRO_STATEMENT[0].alt}
                        />
                    </div>
                </div>
            </div>

            <div id="introStatementB">
                <div className="introStatementFormat-reverse introStatementFormat container-cc py-1">
                    <div className="column basis30">
                        <img
                            src={INTRO_STATEMENT[1].src}
                            className="img-resp"
                            alt={INTRO_STATEMENT[1].alt}
                        />
                    </div>
                    <div className="column basis70">
                        <h2 className="py-1">{INTRO_STATEMENT[1].span}</h2>
                        <p>{INTRO_STATEMENT[1].desc}</p>
                    </div>
                </div>
            </div>

            <div id="introStatementC" className="bg-lightGray">
                <div className="introStatementFormat container-cc py-1">
                    <div className="column basis70">
                        <h2 className="py-1">{INTRO_STATEMENT[2].span}</h2>
                        <p>{INTRO_STATEMENT[2].desc}</p>
                    </div>

                    <div className="column basis30">
                        <img
                            src={INTRO_STATEMENT[2].src}
                            className="img-resp"
                            alt={INTRO_STATEMENT[2].alt}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroStatement;
