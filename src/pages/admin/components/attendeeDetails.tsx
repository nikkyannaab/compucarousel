import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import "./attendeeDetails.css";

type AttendeeDetailsProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
};

const AttendeeDetails: React.FC<AttendeeDetailsProps> = ({ register }) => {
  const [type, setType] = useState<"Attendee" | "Exh">("Attendee");

  return (
    <div className="card">
      <div className="card-header">
        <label>Select Type:</label>
        <select
          value={type}
          {...register(`type`)}
          onChange={(e) => setType(e.target.value as "Attendee" | "Exh")}
          
        >
          <option value="Attendee">Attendee</option>
          <option value="Exh">Exhibitor</option>
        </select>
      </div>

      <div className="card-body">
        {/* Column based on type */}
        <div className="section">
          <div className="form-group">
            <label>Date</label>
            <input type="date" {...register(`date`)} />
          </div>
          <div className="form-group">
            <label>RegUid</label>
            <input type="number" {...register(`regUid`)} />
          </div>
          <div className="form-group">
            <label>Time</label>
            <input type="time" {...register(`time`)} />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input type="text" {...register(`name`)} />
          </div>
          <div className="form-group">
            <label>Message</label>
            <input type="text" {...register(`message`)} />
          </div>
          <div className="form-group">
            <label>Place</label>
            <input type="text" {...register(`place`)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendeeDetails;
