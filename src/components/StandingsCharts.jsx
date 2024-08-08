import DriverStandingsChart from "./StandingsChart";

const DriverStandingsList = ({ driverStandings }) => {
    return (
        <section>
            <DriverStandingsChart driverStandings={driverStandings} />
        </section>
    );
};

export default DriverStandingsList;
