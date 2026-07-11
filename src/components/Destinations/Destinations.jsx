import "./Destinations.css";

const destinations = [
  "London",
  "Edinburgh",
  "Glen Coe",
  "Skye",
  "Orkney",
];

function Destinations() {
  return (
    <section className="destinations">

      {destinations.map((place) => (

        <div className="destination-panel" key={place}>

          <div className="destination-name">
            {place}
          </div>

          <div className="destination-action">
            Explore →
          </div>

        </div>

      ))}

    </section>
  );
}

export default Destinations;