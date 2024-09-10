/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { UseFormRegister } from "react-hook-form";

type AttendeeDetailsProps = {
  index: any;
  register: UseFormRegister<any>;
  data: any;
};

const AttendeeDetails: React.FC<AttendeeDetailsProps> = ({
  index,
  register,
  data,
}) => {
  return (
    <div className="admin-container-attendee-details">
      <div className="admin-header">Type</div>
      <div className="admin-header">RegUid</div>
      <div className="admin-header">Name</div>
      <div className="admin-header">Message</div>
      <div className="admin-header">Place</div>
      <div className="admin-header">Live</div>

      <div className="value">{data?.type}</div>
      <div className="value">
        <input
          type="number"
          {...register(`${data?.type}.${index}.regUid`)}
          defaultValue={data?.regUid}
          style={{ width: "100%" }}
        />
      </div>
      <div className="value">
        <input
          type="text"
          {...register(`${data?.type}.${index}.name`)}
          defaultValue={data?.name}
          style={{ width: "100%" }}
        />
      </div>
      <div className="value">
        <input
          type="text"
          {...register(`${data?.type}.${index}.message`)}
          defaultValue={data?.message}
          style={{ width: "100%", height: "10vh" }}
        />
      </div>
      <div className="value">
        <input
          type="text"
          {...register(`${data?.type}.${index}.place`)}
          defaultValue={data?.place}
          style={{ width: "100%" }}
        />
      </div>
      <div className="value">
        <input
          type="checkbox"
          {...register(`${data?.type}.${index}.live`)} 
          defaultChecked={data?.live || false} 
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default AttendeeDetails;
