import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ReservationForm } from "./ReservationForm.jsx";
import { fetchAPI, submitAPI } from "../../../services/api.js";
import "./Reservations.scss";

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];

export const Reservations = () => {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate("/reservations/confirmed");
  };

  return (
    <div className="bookings">
      <h2>Table reservation</h2>
      <ReservationForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    </div>
  );
};
