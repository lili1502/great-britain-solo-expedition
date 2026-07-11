import "./Layout.css";

import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Destinations from "../Destinations/Destinations";
import RouteMap from "../RouteMap/RouteMap";

function Layout() {
    return (
        <div className="layout">

            <Header />

            <main className="homepage">

                <section className="content-column">

                    <Hero />

                    <Destinations />

                </section>

                <RouteMap />

            </main>

        </div>
    );
}

export default Layout;