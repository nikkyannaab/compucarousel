/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import AttendeeDetails from "./components/attendeeDetails";
import DateTimeBlock from "./components/dateTimeBlock";
import "./index.css";
import { useGetContextWinnerDetails } from "./service-hooks/useGetContextWinners";
import { useUpdateWinnerDetails } from "./service-hooks/useUpdateWinner";

const AdminPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const { data: winnerDetails, refetch } = useGetContextWinnerDetails(); // Get refetch from the hook
  const [currentIId, setCurrentIId] = useState<number | null>(null); // Use iId instead of index for uniqueness
  const { mutate } = useUpdateWinnerDetails();

  // Function to reset the form when the iId changes or on form submit
  useEffect(() => {
    if (currentIId !== null && winnerDetails) {
      const selectedData = winnerDetails.find(
        (winner: any) => winner.iId === currentIId
      );

      // Reset the form fields with the current data
      if (selectedData) {
        reset({
          [selectedData.type]: {
            place: selectedData.place,
            message: selectedData.message,
            name: selectedData.name,
            regUid: selectedData.regUid,
            time: selectedData.time,
            type: selectedData.type,
            date: selectedData.date,
          },
        });
      }
    }
  }, [currentIId, winnerDetails, reset]);

  const onSubmit = (formData: any) => {
    if (currentIId !== null && winnerDetails && winnerDetails.length > 0) {
      // Find the matched winner using iId
      const matchedWinner = winnerDetails.find(
        (winner: any) => winner.iId === currentIId
      );

      console.log("matchedWinner", matchedWinner);

      if (matchedWinner) {
        // Access formData using matchedWinner's type and iId for consistency
        const updatedData = formData[matchedWinner?.type][currentIId];
        console.log("updatedData", updatedData);

        const formDataToBePassed = {
          live: updatedData?.live == true ? 1 : 0,
          place: updatedData?.place,
          message: updatedData?.message,
          name: updatedData?.name,
          regUid: updatedData?.regUid,
          time: matchedWinner?.time,
          type: matchedWinner?.type,
          date: matchedWinner?.date,
          iId: matchedWinner?.iId,
        };

        mutate(formDataToBePassed, {
          onSuccess: (data: any) => {
            alert(data?.sErrorMessage);
            refetch(); // Refetch data from the API after success
            reset(); // Reset the form after success
          },
          onError: (error: any) => {
            console.log("error", error);
          },
        });
      }
    }
  };

  return (
    <div className="admin-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {winnerDetails &&
          // Sort winnerDetails based on date
          [...winnerDetails]
            .sort(
              (a: any, b: any) =>
                new Date(a.date).getTime() - new Date(b.date).getTime()
            )
            .map((item: any) => (
              <div
                key={item.iId} // Use iId for key
                className="admin-attendee-container"
                onFocus={() => setCurrentIId(item.iId)} // Track the current focused item using iId
              >
                <DateTimeBlock date={item.date} time={item.time} />
                <AttendeeDetails
                  index={item.iId} // Use iId for the index here
                  register={register}
                  data={item}
                />
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
