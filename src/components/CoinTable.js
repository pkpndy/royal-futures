import React, { useEffect } from "react";
import "./css/CoinTable.css";
import { Tooltip } from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { BotLiveStatus, MarginCallType, TradingType } from "../utils/enum";
import { useDispatch, useSelector } from "react-redux";
import socket from "../socket";
import { updateRealTimePrice } from "../redux/slices/realTimePrices";

const CoinTable = (props) => {
  const coinPrice = useSelector((state) => state.realTimePrice);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("coinPrice");
    // console.log(coinPrice.data);
    socket.on(`16337410:price updated`, (eventData) => {
      // console.log("data")
      // console.log(eventData)
      dispatch(updateRealTimePrice(eventData.data));
    });

    return () => {
      socket.off(`16337410:price updated`);
    };
  }, [dispatch]);

  const { userdata } = props;

  return (
    <div className="table-container">
      <>
        <div className="headLine">
          <div className="userName">{userdata.email}</div>
          <div className="totalProfitInfo">
            <div className="headLineKey">Total Profit:</div>
            <div className="headLineValue">200</div>
          </div>
          <div className="dayProfitInfo">
            <div className="headLineKey">Day Profit:</div>
            <div className="headLineValue">500</div>
          </div>
        </div>
        <div className="coin-section">
          {userdata.result.map((coin) => (
            <>
              <div className="coin-header">
                {coin.code} ({coin.instrument_token})
              <div className="coin-price">
                {coinPrice ? coinPrice.data : "No data received yet"}
                </div>
              </div>
              <div className="coin-grid">
                <div className="coin-card">
                  <div className="coin-text">Bot Status</div>
                  <div className="coin-subtext">
                    {BotLiveStatus[coin.isRunning]}
                  </div>
                </div>
                <div className="coin-card">
                  <div className="coin-text">Price</div>
                  <div className="coin-subtext">Text2</div>
                </div>
                <div className="coin-card">
                  <div className="coin-text">No. of Buy Call</div>
                  <div className="coin-subtext">Text2</div>
                </div>
                <div className="coin-card">
                  <div className="coin-text">Sub Bin Index</div>
                  <div className="coin-subtext">Text2</div>
                </div>
                <div className="coin-card">
                  <div className="coin-text">Sell Trigger Hit</div>
                  <div className="coin-subtext">Text2</div>
                </div>
                <div className="coin-card">
                  <div className="coin-text">New Sell Trigger</div>
                  <div className="coin-subtext">Text2</div>
                </div>
                <div className="coin-card">
                  <div className="coin-text">Buy Trigger Hit</div>
                  <div className="coin-subtext">Text2</div>
                </div>
                <div className="coin-card">
                  <div className="coin-text">New Buy Trigger</div>
                  <div className="coin-subtext">Text2</div>
                </div>
                <div className="coin-card">
                  <div className="coin-text">Total Amount In Stock</div>
                  <div className="coin-subtext">Text2</div>
                </div>
                <div className="coin-card">
                  <div className="coin-text">Total Profit</div>
                  <div className="coin-subtext">Text2</div>
                </div>
                <div className="coin-card">
                  <div className="coin-text">Trading Type</div>
                  <div className="coin-subtext">
                    {TradingType[coin.tradingType]}
                  </div>
                </div>
                <div className="coin-card">
                  <div className="coin-text">Margin Call Type</div>
                  <div className="coin-subtext">
                    {MarginCallType[coin.marginCallType]}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </>
    </div>
  );
};

export default CoinTable;

// Use this for adding more boxes
{
  /* <div className="coin-section">
  <div className="coin-header">Coin 3</div>
  <div className="coin-grid">
    <div className="coin-card">
      <div className="coin-text">Text 1</div>
      <div className="coin-subtext">Text2</div>
    </div>
    <!-- More coin-card elements -->
  </div>
</div> */
}
