import React from "react";
import "./index.css";
import giftCard from "../../../assets/contextWinners/giftCard.svg";
import expo from "../../../assets/contextWinners/expo.png";
import { useContextWinnerDetails } from "../service-hooks/useContectWinner";

const ContextWinners: React.FC = () => {
  const { data: winnerDetails } = useContextWinnerDetails();

  return (
    <div className="context-container">
      <div className="header">Congratulations to Our Expo Wallet Winners!</div>

      <div className="winner-time-tag">
        <div className="winner-time-tag-content">12:00 PM WINNERS</div>
      </div>

      <div className="winner-details-container">
        <div className="winner-details-content">
          <div>
            <div>Attendee Winner</div>
            <div className="winner-details-content-names">
              {winnerDetails &&
                winnerDetails[0]?.type === "Attendee" &&
                winnerDetails[0]?.name}
            </div>
          </div>
        </div>

        <div className="winner-details-content">
          <div>
            <div style={{ display: "flex" }}>Exhibitor Winner</div>
            <div className="winner-details-content-names">
              {winnerDetails &&
                winnerDetails[1]?.type === "Exh" &&
                winnerDetails[1]?.name}
            </div>
          </div>
        </div>

        <div className="image-container-gift">
          <img
            src={giftCard}
            alt="Gift Card"
            className="image-expo-container-gift"
          />
        </div>
      </div>

      <div className="sub-footer">
        <div className="sub-footer-content-container">
          <div className="sub-footer-content">
            Winners Collect Their $100 AMEX Gift
          </div>
          <div className="sub-footer-content">
            {winnerDetails && `Card in the ${winnerDetails[0]?.place}.`}
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-sub-container">
          <div className="footer-content">
            {winnerDetails &&
              ` Your next chance to win is at ${winnerDetails[0]?.time} today!`}
            <br />
            Remember, the more you scan, the better your chances to see your
            name here.
          </div>
        </div>
        <div className="image-footer">
          <img src={expo} className="image-expo-footer" alt="expo Card" />
        </div>
      </div>
    </div>
  );
};

export default ContextWinners;
