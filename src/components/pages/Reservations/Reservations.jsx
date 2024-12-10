import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReservationForm } from './ReservationForm.jsx';
import './Reservations.scss';

const updateTimes = (availableTimes, date) => {};

const initializeTimes = initialAvailableTimes => initialAvailableTimes;

export const Reservations = () => {
  const [
    availableTimes, 
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitData = formData => {
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