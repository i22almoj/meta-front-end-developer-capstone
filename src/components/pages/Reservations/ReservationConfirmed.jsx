import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ReservationConfirmed = () => {
  return (
    <>
      <h2 className="page-title">Reservations</h2>
      <div className="container confirmed-booking">
        <FontAwesomeIcon icon={faCircleCheck} size="3x" />
        <h2>Your reservation has been confirmed.</h2>
        <p>You will receive an email with all the details.</p>
      </div>
    </>
  );
};
