import "./TimeCommitment.css";
// import WinCalendar from '../winCalendar/AirtableCalendar.js'

function TimeCommitment() {
    return (
        <div id="TimeCommitment" className="container-cc">
            <section className="winProgramIntro">
                <h1 className="font-mogan">
                    Our How to Win Stakeholders & Influence Decisions Program
                </h1>

                <p>
                    We want you to get the support you need to attain a new
                    level in your UX career.
                </p>
                <p>
                    That’s why we invite you to enroll in our brand new{" "}
                    <strong>
                        How to Win Stakeholders & Influence Decisions program
                    </strong>
                    .
                </p>
                <p>
                    This 16-week program has everything you need to master each
                    of the <strong>8 Pillars of Stakeholder Influence</strong>.
                    Attain a new set of tools, skills, and mindset from program
                    creators Leslie Jensen-Inman and Jared Spool to propel your
                    career in a whole new (and much more fun) direction.
                </p>
            </section>

            {/* <WinCalendar /> */}

            <section className="programSchedule">
                <h2 className="attention-voice font-mogan">
                    Time Commitment and Program Schedule
                </h2>

                <h3 className="change-cta-voice">
                    <em>Commit 2-3 hours per week to see real change.</em>
                </h3>
                <p>
                    <strong>
                        We hold a new program start date every month.
                    </strong>{" "}
                    Once you start the program, you’ll gain access to our
                    private online learning space hosted in our Leaders of
                    Awesomness community.
                </p>

                <p>
                    <strong>
                        Then every two weeks, for the 16-weeks of the program,
                    </strong>{" "}
                    Leslie and Jared will introduce you to a brand new pillar of
                    stakeholder influence. They’ll share the techniques, tips,
                    and methods that will expand your current skill set and put
                    you on a path to success.
                </p>

                <p>
                    <strong>
                        You’ll join weekly live lab sessions every Wednesday for
                        direct mentorship and guidance.
                    </strong>{" "}
                    For the first four weeks of the program, you can join a live
                    lab session on Wednesdays at 11am ET (15.00 GMT) or at 7pm
                    ET (23.00 GMT). For the remaining twelve weeks, you can join
                    the live lab sessions on Wednesday 1pm ET (17.00 GMT) or 7pm
                    ET (23.00 GMT).
                </p>

                <p>
                    <strong>
                        Each live lab session is recorded, so you can catch up
                        by watching the recording if you miss it.
                    </strong>{" "}
                    We usually have the recordings posted within 24 hours. If
                    you have questions, you can put them in the discussion area
                    in our community space.
                </p>

                <p>
                    <strong>
                        Each week, there’s also a video about the topic to watch
                        at your convenience and some homework to prepare for the
                        labs.
                    </strong>{" "}
                    The videos are usually about 45 minutes long, and the
                    homework can take 20 - 40 minutes.
                </p>

                <p>
                    <strong>
                        Overall you’ll expect to spend about 2 to 3 hours a week
                        on this program.
                    </strong>{" "}
                    That’s a 1 hour live lab session every week, a 1 hour video
                    every other week, and ½ hour of intentional
                    practice/homework every week.
                </p>

                <h2 id="your-investment-in-lifetime-skills-will-forever-change-the-trajectory-of-your-ux-career">
                    Your investment in lifetime skills will forever change the
                    trajectory of your UX career.
                </h2>
                <p>
                    We’re quite serious when we say this. What you learn in this
                    program will be skills, tools, and mindsets that you’ll use
                    every day for the lifetime of your UX career. We’ve seen UX
                    professionals take these techniques and successfully make a
                    case for…
                </p>
                <ul className="">
                    <li>
                        starting an important research project that’s been
                        back-burnered for the last 18 months.
                    </li>
                    <li>
                        growing their UX team to better keep pace with product
                        and development.
                    </li>
                    <li>
                        expanding their organization’s research capability to
                        influence strategic decisions.
                    </li>
                    <li>
                        shifting their organization to stop <em>saying</em>{" "}
                        they’re customer-centered, and instead
                        <em>truly become</em> customer-centered.
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default TimeCommitment;
