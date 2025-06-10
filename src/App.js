import { CardGrid } from "./components/CardGrid";
import { StepsBar } from "./components/StepsBar";
import styles from "./styles/App.module.css";
import skipData from "data/skipsData.json";

function App() {
  return (
    <div className={styles.main}>
      <StepsBar />
      <div className={styles.contentWrapper}>
        <CardGrid skipsData={skipData} />
      </div>
    </div>
  );
}

export default App;
