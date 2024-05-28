import React from "react";
import { BiDollar } from "react-icons/bi";
import "./NoTrades.css";

const NoTrades = () => {
  return (
    <div className="noTradesWrapper">
      <div className="noTradesMessage">
        <div className="noTradesIcon">
          <BiDollar />
        </div>
        <p>Nothing selected yet</p>
      </div>
    </div>
  );
};

export default NoTrades;
