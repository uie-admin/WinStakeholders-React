import "./ArticlesAndPodcasts.css";
import { ARTICLES_AND_PODCASTS } from "../../const";

function ArticlesAndPodcasts() {
    return (
        <div id="ArticlesAndPodcasts">
            <div className="ArticlesAndPodcastsFormat container-cc py-2 text-center">
                <h3 className="h3 font-mogan">
                    What if you could convince your toughest stakeholders that
                    your work will drive innovation?
                </h3>
            </div>
            <div className="container-cc">
                <div>
                    <p>
                        We know you feel like you’ve tried everything to get
                        buy-in from stakeholders. You’ve sought out every
                        technique for persuading them to see the power of UX as
                        you do.
                    </p>
                </div>
            </div>

            <ul className="podcastList container-cc">
                {ARTICLES_AND_PODCASTS.map((rows) => {
                    return (
                        <li className="podcastItem flex">
                            <picture className="ccIcon">
                                <img
                                    src={rows.src}
                                    className="img-resp"
                                    alt={rows.alt}
                                />
                            </picture>

                            <div className="bg-white basis90">
                                <h2>{rows.desc}</h2>
                            </div>
                        </li>
                    );
                })}
            </ul>

            <div className="container-cc py-2 pb-4">
                <p>
                    You’ve done your best to solve your complete puzzle by
                    pulling all the pieces together. It’s hard. Especially when
                    every suggestion still leaves you with an incomplete
                    picture. And when you don’t have the right support to bring
                    the picture into focus.
                </p>
                <p>
                    This means that you're standing still no matter how much
                    action you take. For an action-taker like you, that feeling
                    of stalling out is so defeating. It’s exhausting.
                </p>
                <p>We get it. We’ve been there.</p>
                <p>
                    We also know how to get through it. And we know how to get{" "}
                    <i>you</i> through it.
                </p>
            </div>
        </div>
    );
}

export default ArticlesAndPodcasts;
