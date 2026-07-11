import "./RouteMap.css";
import mapImage from "../../assets/maps/gbse-terrain-map.png";

function RouteMap() {
    return (
        <aside className="route-map">

            <div className="route-map-panel">

                <img
                    src={mapImage}
                    alt="Expedition Map of Great Britain"
                    className="route-map-image"
                />

            </div>

        </aside>
    );
}

export default RouteMap;