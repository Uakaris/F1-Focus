import LatestRaceResultsCard from "../components/LatestRaceResultsCard";
import "../components/LatestRaceResultsCard.css";

const LatestRaceResultsList = ({ results, race }) => {
    const RaceResultsListItems = results.map((results) => (
        <LatestRaceResultsCard
            key={results.number}
            results={results}
            race={race}
        />
    ));

    return (
        <section>
            <h3 className="RaceLocation">
                {race[0]?.Circuit?.circuitName || "Unknown"}
            </h3>
            <ul className="LatestRaceResultsList">{RaceResultsListItems}</ul>
        </section>
    );
};

export default LatestRaceResultsList;
