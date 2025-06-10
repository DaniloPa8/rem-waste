import skipData from "./../data/skipsData.json";
import { OneCard } from "./OneCard";
import "./../styles/components/CardGrid.css";

export const CardGrid = () => {
  return (
    <div className="CardGridWrapper">
      {skipData.map((oneSkip) => (
        <OneCard skip={oneSkip} />
      ))}
    </div>
  );
};
