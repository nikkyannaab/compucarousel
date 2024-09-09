import { useForm } from "react-hook-form";
import AttendeeDetails from "./components/attendeeDetails";
import "./index.css";
import { useUpdateWinnerDetails } from "./service-hooks/useUpdateWinner";

const AdminPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const { mutate } = useUpdateWinnerDetails();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (formData: any) => {
    const formDataToBePassed = {
      live: 1,
      place: formData.place,
      message: formData.message,
      name: formData.name,
      regUid: formData.regUid,
      time: formData.time,
      type: formData.type,
      date: formData.date,
      iId: formData.type === "Attendee" ? 2 : 1,
    };

    console.log("formDataToBePassed", formDataToBePassed);

    mutate(formDataToBePassed, {
      onSuccess: (data) => {
        alert(data?.sErrorMessage);
        console.log("Data", data?.sErrorMessage);
        reset();
      },
      onError: (error) => {
        console.log("error", error);
      },
    });
  };

  return (
    <div className="admin-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <AttendeeDetails register={register} />
        {/* Card Footer */}
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
