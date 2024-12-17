import "./EightPillars.css";
import { EIGHT_PILLARS } from "../../const";

function EightPillars() {
    return (
        <div id="EightPillars" className="container-cc">
            <div className="eightPillarsIntro">
                <h1 className="loud-voice font-mogan">
                    The 8 Pillars of Stakeholder Influence
                </h1>
                <p>
                    Every UX leader reaches a point where their work needs to
                    shift. Creating great designs and conducting meaningful UX
                    research isn’t enough. They must overcome the pressures of
                    the organization and, most importantly, they need the help
                    of key stakeholders to make that happen.
                </p>
                <p>
                    UX is a team sport. You need support and buy-in from your
                    partners in product management and development. However,
                    that support won’t come by itself.
                </p>
                <p>
                    We’ve spent the last two decades studying how successful UX
                    leaders get their peers to make UX a top priority. We’ve
                    collected the techniques and perspectives that give these UX
                    leaders an advantage in their organization.
                </p>
                <p>
                    We’ve packaged these up into eight important themes. We call
                    them…
                </p>
            </div>

            <div id="EightPillarsExplained">
                <h2 className="font-mogan">
                    The 8 Pillars of Stakeholder Influence
                </h2>
                <ul className="eightPillarsList">
                    {EIGHT_PILLARS.map((pillars) => {
                        return (
                            <li className="pillarItem">
                                <picture className="pillarNumber">
                                    <img
                                        src={pillars.src}
                                        className="img-resp"
                                        alt={pillars.alt}
                                    />
                                </picture>
                                <div className="">
                                    <h2>{pillars.title}</h2>
                                    <p>{pillars.desc}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="pillarsConclusion">
                <p>
                    As you master the skills, tools, and mindsets of each
                    pillar, you’ll immediately feel as if you’ve been released
                    from the restraints that have been holding you back. You’ll
                    see results right away because your ideas and suggestions
                    won’t get the pushback they have in the past.
                </p>
                <p>
                    Instead, you’ll become empowered to push for even bigger and
                    better things. Most importantly, your contributions will be
                    appreciated and encouraged. You’ll finally have the support
                    you need.
                </p>
            </div>
        </div>
    );
}

export default EightPillars;
