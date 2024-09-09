import React from "react";
import { UseFormRegister } from "react-hook-form";

type AttendeeDetailsProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  index: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
};

const AttendeeDetails: React.FC<AttendeeDetailsProps> = ({
  index,
  register,
}) => {
  return (
    <div className="admin-container-attendee-details">
      <div className="admin-header">Type</div>
      <div className="admin-header">RegUid</div>
      <div className="admin-header">Name</div>
      <div className="admin-header">Message</div>
      <div className="admin-header">Place</div>

      {/* First Row: Attendee */}
      <div className="value">Attendee</div>
      <div className="value">
        <input type="number" {...register(`attendee.${index}.regUid`)} />
      </div>
      <div className="value">
        <input type="text" {...register(`attendee.${index}.name`)} />
      </div>
      <div className="value">
        <input type="text" {...register(`attendee.${index}.message`)} />
      </div>
      <div className="value">
        <input type="text" {...register(`attendee.${index}.place`)} />
      </div>

      {/* Second Row: Exh */}
      <div className="value">Exh</div>
      <div className="value">
        <input type="number" {...register(`exh.${index}.regUid`)} />
      </div>
      <div className="value">
        <input type="text" {...register(`exh.${index}.name`)} />
      </div>
      <div className="value">
        <input type="text" {...register(`exh.${index}.message`)} />
      </div>
      <div className="value">
        <input type="text" {...register(`exh.${index}.place`)} />
      </div>
    </div>
  );
};

export default AttendeeDetails;
