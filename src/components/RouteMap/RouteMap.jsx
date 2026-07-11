import "./RouteMap.css";
import mapImage from "../../assets/maps/Great_Britain.svg";

function RouteMap() {
    return (
        <aside className="route-map">

            <div className="map-preview">

                <img
                    src={mapImage}
                    alt="Great Britain"
                    className="map-image"
                />

            </div>

            <div className="map-expanded">

                <img
                    src={mapImage}
                    alt="Great Britain Expanded"
                    className="map-image-large"
                />

            </div>

        </aside>
    );
}

export default RouteMap;