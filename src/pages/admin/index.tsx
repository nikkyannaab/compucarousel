/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AttendeeDetails from "./components/attendeeDetails";
import DateTimeBlock from "./components/dateTimeBlock";
import "./index.css";
import { useGetContextWinnerDetails } from "./service-hooks/useGetContextWinners";
import { useUpdateWinnerDetails } from "./service-hooks/useUpdateWinner";

const AdminPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const { data: winnerDetails, refetch } = useGetContextWinnerDetails(); // Get refetch from the hook
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const { mutate } = useUpdateWinnerDetails();

  const onSubmit = (formData: any) => {
    if (currentIndex !== null) {
      // Get the updated data from the form
      const updatedData =
        formData[winnerDetails[currentIndex].type][currentIndex];

      // Merge the updated data with the original data from the GET API
      const mergedData = {
        ...winnerDetails[currentIndex],
        ...updatedData,
      };

      const formDataToBePassed = {
        live: 1,
        place: mergedData?.place,
        message: mergedData?.message,
        name: mergedData?.name,
        regUid: mergedData?.regUid,
        time: mergedData?.time,
        type: mergedData?.type,
        date: mergedData?.date,
        iId: mergedData?.iId,
      };

      mutate(formDataToBePassed, {
        onSuccess: (data: any) => {
          alert(data?.sErrorMessage);
          refetch(); // Refetch data from the API after success
          reset();
        },
        onError: (error: any) => {
          console.log("error", error);
        },
      });
    }
  };

  return (
    <div className="admin-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {winnerDetails &&
          winnerDetails.map((item: any, index: any) => (
            <div
              key={index}
              className="admin-attendee-container"
              onFocus={() => setCurrentIndex(index)} 
            >
              <DateTimeBlock date={item.date} time={item.time} />
              <AttendeeDetails index={index} register={register} data={item} />
            </div>
          ))}

        <div className="card-footer">
          <button type="submit" className="save-button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPage;
