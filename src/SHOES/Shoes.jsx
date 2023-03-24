import React from "react";
import { add, multiply } from "../UTILITIES/Utilities";

const Shoes = () => {
  const first = 3;
  const second = 3;
  const result = multiply(first, second);
  const total = add(first, second);
  return (
    <div>
      <h4>{/* Multiply: {result} and Add: {total} */}</h4>
    </div>
  );
};

export default Shoes;
