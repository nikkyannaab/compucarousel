import React from "react";

type DateTimeBlockProps = {
  date: string;
  time: string;
};

const DateTimeBlock: React.FC<DateTimeBlockProps> = ({ date, time }) => {
  return (
    <div className="date-time-container">
      <div>
        <span className="bold-text">Date:</span> {date}
      </div>
      <div>
        <span className="bold-text">Time:</span> {time}
      </div>
    </div>
  );
};

export default DateTimeBlock;
