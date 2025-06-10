import { CardGrid } from "./components/CardGrid";
import { StepsBar } from "./components/StepsBar";
import "./styles/App.css";

function App() {
  return (
    <div className="Main">
      <StepsBar />
      <div className="ContentWrapper">
        <CardGrid />
      </div>
    </div>
  );
}

export default App;
