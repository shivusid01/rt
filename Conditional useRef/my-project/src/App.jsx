import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/card/card";
import card from "./components/card/card";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <card />
      </div>
    </>
  );
}

export default App;
