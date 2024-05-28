import React, { useState } from "react";
import barChart from "../assets/barChart.jpg";
import lineChart from "../assets/lineChart.jpg";
import { IoBarChartSharp } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { IoChevronBackSharp } from "react-icons/io5";
import useMediaQuery from "@mui/material/useMediaQuery";
import NoTrades from "./NoTrades";
import "./TradeDetail.css";

const MAX_VALUES = {
  calmarRatio: 5,
  avgDailyProfit: 5000,
  overallProfit: 100000,
  winPercentage: 100,
};

const TradeDetail = ({ selectedTrade, onBack }) => {
  const [typesOfGraph, setTypeOfGraph] = useState("bar");

  const isSmallScreen = useMediaQuery("(max-width:768px)");

  console.log("SelectedTradeObject is : ", selectedTrade);

  if (!selectedTrade) {
    return <NoTrades />;
  }

  return (
    <div className="tradeDetailsWrapper">
      {isSmallScreen && (
        <div className="tradeDetailsHeader">
          <span className="backSymbol" onClick={onBack}>
            <IoChevronBackSharp />
          </span>
          <span className="tradeName">
            <h2>{selectedTrade.name}</h2>
          </span>
        </div>
      )}
      {!isSmallScreen && (
        <div className="tradeDetailsHeader">
          <span className="tradeName">
            <h2>{selectedTrade.name}</h2>
          </span>
        </div>
      )}

      <div className="tradeGraphs">
        <div className="typesOfGraphs">
          <p onClick={() => setTypeOfGraph("bar")}>
            <IoBarChartSharp />
          </p>
          <p onClick={() => setTypeOfGraph("chart")}>
            <FaChartLine />
          </p>
        </div>
        <div className="tradeGraphImg">
          <img src={typesOfGraph === "bar" ? barChart : lineChart} />
        </div>
      </div>
      <div className="tradeRatioPrice">
        <DataBlock
          label="Calmar"
          value={selectedTrade.calmarRatio}
          max={MAX_VALUES.calmarRatio}
        />
        <DataBlock
          label="Avg Daily Profit"
          value={selectedTrade.avgDailyProfit}
          max={MAX_VALUES.avgDailyProfit}
        />
        <DataBlock
          label="Overall Profit"
          value={selectedTrade.overallProfit}
          max={MAX_VALUES.overallProfit}
        />
        <DataBlock
          label="Win Percentage"
          value={selectedTrade.winPercentDay}
          max={MAX_VALUES.winPercentage}
        />
      </div>
      <div className="buyStock">
        <button>Buy Now</button>
      </div>
    </div>
  );
};

const DataBlock = ({ label, value, max }) => {
  const percentage = Math.min((value / max) * 100, 100);
  const displayValue = value > max ? `${max}+` : value;

  return (
    <div className="data-block">
      <span className="dataBlockHeader">
        <p style={{ fontWeight: 600, fontSize: "15px" }}>{label}:</p>
        <p>{displayValue}</p>
      </span>
      <div className="block-container">
        <div className="block" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

export default TradeDetail;
