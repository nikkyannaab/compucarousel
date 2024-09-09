import React from "react";
import { useForm } from "react-hook-form";
import AttendeeDetails from "./components/attendeeDetails";
import DateTimeBlock from "./components/dateTimeBlock";
import "./index.css";
import { useContextWinnerDetails } from "../contextWinner/service-hooks/useContectWinner";

const AdminPage = () => {
  const { register, handleSubmit } = useForm();
  const { data: winnerDetails } = useContextWinnerDetails();
  console.log("winnerDetails", winnerDetails);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);

    // const formDataToBePassed = {
    //     live: 1,
    //     place: formData.place,
    //     message: formData.message,
    //     name: formData.name,
    //     regUid: formData.regUid,
    //     time: formData.time,
    //     type: formData.type,
    //     date: formData.date,
    //     iId: formData.type === "Attendee" ? 2 : 1,
    //   };

    //   console.log("formDataToBePassed", formDataToBePassed);

    //   mutate(formDataToBePassed, {
    //     onSuccess: (data) => {
    //       alert(data?.sErrorMessage);
    //       console.log("Data", data?.sErrorMessage);
    //       reset();
    //     },
    //     onError: (error) => {
    //       console.log("error", error);
    //     },
    //   });
  };

  return (
    <div className="admin-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {winnerDetails &&
          winnerDetails.map(
            (
              item: { date: string; time: string },
              index: React.Key | null | undefined
            ) => (
              <div key={index} className="adim-attendee-container">
                <DateTimeBlock date={item.date} time={item.time} />
                <AttendeeDetails index={index} register={register} />
              </div>
            )
          )}

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AdminPage;
