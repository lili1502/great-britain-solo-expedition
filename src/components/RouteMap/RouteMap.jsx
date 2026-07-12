import "./RouteMap.css";
import mapImage from "../../assets/maps/gbse-terrain-map.png";

function RouteMap() {
    return (
        <aside className="route-map">

            <div className="route-map-top"></div>

            <div className="route-map-map">

                <img
                    src={mapImage}
                    alt="Great Britain Expedition"
                    className="route-map-image"
                />

            </div>

            <div className="route-map-bottom">

                <div className="departure-counter">

                    <div className="departure-title">
                        Expedition Departure
                    </div>

                    <div className="departure-divider"></div>

                    <div className="departure-count">

                        <span className="departure-number">
                            684
                        </span>

                        <span className="departure-days">
                            Days
                        </span>

                    </div>

                    <div className="departure-date">
                        19 May 2028
                    </div>

                </div>

            </div>

        </aside>
    );
}

export default RouteMap;