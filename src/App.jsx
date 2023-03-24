import { useState } from "react";

import "./App.css";
import Cosmetics from "./COMPONENTS/COSMETICS/Cosmetics";
import Shoes from "./SHOES/Shoes";

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
    </div>
  );
}

export default App;
