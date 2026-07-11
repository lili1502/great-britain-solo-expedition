import "./Hero.css";
import heroImage from "../../assets/images/hero.png";

function Hero() {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="hero-overlay">

                <div className="hero-title">

                    <h1>
                        Great Britain Solo Expedition
                    </h1>

                </div>

            </div>
        </section>
    );
}

export default Hero;