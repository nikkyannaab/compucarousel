/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./index.css";
import giftCard from "../../../assets/contextWinners/giftCard.svg";
import expo from "../../../assets/contextWinners/expo.png";
import { useContextWinnerDetails } from "../service-hooks/useContectWinner";

const ContextWinners: React.FC = () => {
  const { data: winnerDetails } = useContextWinnerDetails();

  const attendeeWinners =
    winnerDetails &&
    winnerDetails.filter((winner: any) => winner.type === "Attendee");
  const exhibitorWinners =
    winnerDetails &&
    winnerDetails.filter((winner: any) => winner.type === "Exh");

  const messageFormatter = (message: string) => {
    const normalizedMessage = message.replace(/\\n/g, "\n");

    const messageArray = normalizedMessage
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    return messageArray;
  };

  return (
    <div className="context-container">
      <div className="header">Congratulations to Our Expo Wallet Winners!</div>

      <div className="winner-time-tag">
        <div className="winner-time-tag-content">
          {winnerDetails && `${winnerDetails[0]?.time} WINNERS`}
        </div>
      </div>

      <div className="winner-details-container">
        <div className="winner-details-content">
          <div>
            <div>Attendee Winner</div>
            <div className="winner-details-content-names">
              {attendeeWinners && attendeeWinners[0]?.name}
            </div>
          </div>
        </div>

        <div className="winner-details-content">
          <div>
            <div style={{ display: "flex" }}>Exhibitor Winner</div>
            <div className="winner-details-content-names">
              {exhibitorWinners && exhibitorWinners[0]?.name}
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
            {winnerDetails && messageFormatter(winnerDetails[0]?.message)[0]}

            <br />
            {winnerDetails && messageFormatter(winnerDetails[0]?.message)[1]}
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
