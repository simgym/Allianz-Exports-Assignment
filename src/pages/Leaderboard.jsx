import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import TradeDetail from "../components/TradeDetail";
import AllTrades from "../components/AllTrades";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [selectedTrade, setSelectedTrade] = useState(null);
  const [showTradeDetails, setShowTradeDetails] = useState(false);

  const isSmallScreen = useMediaQuery("(max-width:768px)");

  const handleSelectChat = (trade) => {
    console.log("handleSelectChat called in ZOROBUDDY with", trade);
    setSelectedTrade(trade);
    if (isSmallScreen) {
      setShowTradeDetails(true);
    }
    console.log("selectedChat updated to", trade);
  };

  const handleBackToSidebar = () => {
    setShowTradeDetails(false);
  };

  return (
    <div>
      {isSmallScreen ? (
        showTradeDetails ? (
          <span>
            <div className="leaderboardHeader">
              <h1>LeaderBoards</h1>
            </div>
            <TradeDetail
              selectedTrade={selectedTrade}
              onBack={handleBackToSidebar}
            />
          </span>
        ) : (
          <span>
            {" "}
            <div className="leaderboardHeader">
              <h1>LeaderBoards</h1>
            </div>
            <AllTrades setSelectedTrade={handleSelectChat} />
          </span>
        )
      ) : (
        <>
          <div className="leaderboardWrapper">
            <div className="leaderboardHeader">
              <h1>LeaderBoards</h1>
            </div>
            <div className="leaderboardComps">
              <span className="allTradesLeaderboard">
                <AllTrades setSelectedTrade={handleSelectChat} />
              </span>
              <span className="tradeDetailLeaderboard">
                <TradeDetail selectedTrade={selectedTrade} />
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Leaderboard;
