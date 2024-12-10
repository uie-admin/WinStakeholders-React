import "./styles/site.css";

import Header from "./components/Header/Header.js";
import Landing from "./components/Landing/Landing.js";
import IntroStatement from "./components/IntroStatement/IntroStatement.js";
import ArticlesAndPodcasts from "./components/ArticlesAndPodcasts/ArticlesAndPodcasts.js";
import TimeToBegin from "./components/TimeToBegin/TimeToBegin.js";
import EnrollNow from "./components/EnrollNow/EnrollNow.js";
import EightPillars from "./components/EightPillars/EightPillars.js";
import { TESTIMONIES } from "./const.js";
import Testimonials from "./components/Testimonials/Testimonials.js";
import TimeCommitment from "./components/TimeCommitment/TimeCommitment.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import Pricing from "./components/Pricing/Pricing.js";
import RecordingTestimonial from "./components/RecordingTestimonial/RecordingTestimonial.js";
import Footer from "./components/Footer/Footer.js";

import AirtableCalendar from "./components/Calendar/AirtableCalendar.js";
// import HardcoreCalendar from './components/Calendar/hardcoreCalendar.js'

function App() {
    return (
        <div className="App">
            <Header />
            <Landing />
            <IntroStatement />
            <ArticlesAndPodcasts />
            <TimeToBegin />
            <EnrollNow />
            <EightPillars />
            <Testimonials testimonyData={TESTIMONIES.slice(0, 2)} />
            <AirtableCalendar />

            <TimeCommitment />
            <EnrollNow />
            <Testimonials testimonyData={TESTIMONIES.slice(2)} />
            <AboutUs />
            <EnrollNow />
            <Pricing />
            <RecordingTestimonial />
            <Footer />
        </div>
    );
}

export default App;
