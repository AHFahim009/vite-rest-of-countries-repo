import React, { useEffect, useState } from "react";
import { add } from "../../UTILITIES/Utilities";
import Cosmetic from "../COSMETIC/Cosmetic";
import "./Cosmetics.css";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);
  return (
    <div>
      <h1 className="title">Welcome to my cosmetics store</h1>
      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
