import React from "react";
import "./Cosmetic.css";
const Cosmetic = (props) => {
  const { name, price } = props.cosmetic;
  return (
    <div className="single-cosmetic">
      <h1>Look this products: {name}</h1>
      <h2>Only: {price} taka......</h2>
    </div>
  );
};

export default Cosmetic;
