import React, { useState } from "react";
import growthSymbol from "../assets/growthSymbol.jpg";
import { MdCurrencyRupee } from "react-icons/md";
import { FcNext } from "react-icons/fc";
import "./AllTrades.css";
import TradeDetail from "./TradeDetail";

const AllTrades = ({ setSelectedTrade }) => {
  const tradesArray = [
    {
      name: "Selling with re entr",
      calmarRatio: 3.96,
      overallProfit: 381845,
      avgDailyProfit: 319.54,
      winPercentDay: 0.65,
      priceRs: "",
      action: "View",
    },
    {
      name: "strategy_name",
      calmarRatio: 3.62,
      overallProfit: 268872.5,
      avgDailyProfit: 216.31,
      winPercentDay: 0.64,
      priceRs: 500,
      action: "Buy",
    },
    {
      name: "Based on premium and",
      calmarRatio: 3.42,
      overallProfit: 255425,
      avgDailyProfit: 208.51,
      winPercentDay: 0.64,
      priceRs: "",
      action: "View",
    },
    {
      name: "strategy_name",
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercentDay: 0.65,
      priceRs: "",
      action: "View",
    },
    {
      name: "strategy_name",
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercentDay: 0.65,
      priceRs: "",
      action: "View",
    },
    {
      name: "Based on premium wit",
      calmarRatio: 3.01,
      overallProfit: 135980,
      avgDailyProfit: 185.77,
      winPercentDay: 0.49,
      priceRs: "",
      action: "View",
    },
    {
      name: "strategy_name",
      calmarRatio: 2.76,
      overallProfit: 267867.5,
      avgDailyProfit: 218.49,
      winPercentDay: 0.6,
      priceRs: "",
      action: "View",
    },
    {
      name: "Wait and trade_Save",
      calmarRatio: 2.62,
      overallProfit: 178252.5,
      avgDailyProfit: 161.9,
      winPercentDay: 0.63,
      priceRs: "",
      action: "View",
    },
    {
      name: "iron condor",
      calmarRatio: 2.44,
      overallProfit: 176420,
      avgDailyProfit: 137.51,
      winPercentDay: 0.65,
      priceRs: "",
      action: "View",
    },
    {
      name: "strategy_name",
      calmarRatio: 2.04,
      overallProfit: 244555,
      avgDailyProfit: 198.66,
      winPercentDay: 0.62,
      priceRs: "",
      action: "View",
    },
  ];

  return (
    <div className="allTradesWrapper">
      <div className="allTrades">
        {/* <h2>Leaderboard</h2> */}
        <div className="allTradesHeader">
          <h2>Basic Backtest</h2>
          <span className="slippageWrapper">
            <p>Slippage</p>
            <select className="slippageOptions">
              <option>0%</option>
              <option>0.5%</option>
              <option>1%</option>
            </select>
          </span>
        </div>
        <div className="allTradesList">
          {tradesArray.map((item, index) => (
            <li
              key={index}
              className="tradeWrapper"
              onClick={() => setSelectedTrade(item)}
            >
              <span className="rankName">
                <p>{index + 1}</p>
                <span className="nameCalmarRatio">
                  <strong>{item.name}</strong>
                  <span className="calmarRatioWrapper">
                    <img
                      src={growthSymbol}
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p>{item.calmarRatio}</p>
                  </span>
                </span>
              </span>
              <span className="priceDetailIconWrapper">
                <strong>
                  {item.priceRs ? (
                    <span className="tradeCost">
                      <MdCurrencyRupee />
                      {item.priceRs}
                    </span>
                  ) : (
                    <p>NA</p>
                  )}
                </strong>
                <FcNext />
              </span>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTrades;
