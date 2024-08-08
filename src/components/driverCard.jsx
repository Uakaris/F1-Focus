import "../components/driverCard.css";

const DriverCard = ({ driver }) => {
    return (
        <li className="DriverCard">
            <div className="driver-info">
                <h2 id="driver-name">
                    {driver.full_name || "No name available"}
                </h2>
                <p>
                    Number: <strong>{driver.driver_number || "N/A"}</strong>
                </p>
                <p>
                    Team: <strong>{driver.team_name || "N/A"}</strong>
                </p>
                <p>
                    Country: <strong>{driver.country_code}</strong>
                </p>
            </div>
            <div className="driver-picture">
                <img
                    src={driver.headshot_url || "default-image-url"}
                    alt={driver.full_name || "Driver"}
                />
            </div>
        </li>
    );
};

export default DriverCard;
