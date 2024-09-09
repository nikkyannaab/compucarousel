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

      <div className="value">{data?.type}</div>
      <div className="value">
        <input
          type="number"
          {...register(`${data?.type}.${index}.regUid`)}
          value={data?.regUid}
          style={{width:"100%"}}
        />
      </div>
      <div className="value">
        <input
          type="text"
          {...register(`${data?.type}.${index}.name`)}
          value={data?.name}
          style={{width:"100%"}}
        />
      </div>
      <div className="value">
        <input
          type="text"
          {...register(`${data?.type}.${index}.message`)}
          value={data?.message}
          style={{width:"100%" , height:"10vh"}}
        />
      </div>
      <div className="value">
        <input
          type="text"
          {...register(`${data?.type}.${index}.place`)}
          value={data?.place}
          style={{width:"100%"}}
        />
      </div>

      {/* Second Row: Exh */}
      {/* <div className="value">Exh</div>
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
      </div> */}
    </div>
  );
};

export default AttendeeDetails;
