import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BioData from "./components/BioData";

// event handeller

function App() {
  const [dynamiccounter, setdynamiccouner] = useState(0);
  const Increase = () => {
    setdynamiccouner(dynamiccounter + 1);
  };
  const Decrease = () => {
    if (dynamiccounter > 0) {
      setdynamiccouner(dynamiccounter - 1);
    }
  };
  return (
    <>
      <div>
        <h2> The coun value is: {dynamiccounter}</h2>
        <button onClick={Increase}>Increase By 1</button>
        <button onClick={Decrease}>Decrease By 1</button>
      </div>
    </>
  );
}

export default App;
