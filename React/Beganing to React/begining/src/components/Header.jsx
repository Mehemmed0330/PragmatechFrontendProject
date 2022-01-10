import React from "react";
import { useState } from "react";

import "./Header.css";
import "./Reset.css";
const Header = () => {
  const [count, setcount] = useState(5);
  {
    if (count === 15) alert("Access");
  }
  return (
    <div className="container">
      <button onClick={() => setcount(count - 1)}>-</button>
      <div className="num">{count}</div>
      <button onClick={() => setcount(count + 1)}>+</button>
    </div>
  );
};

export default Header;
