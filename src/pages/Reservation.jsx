import { useReducer } from "react";
import BookingForm from "../componenets/BookingForm";

// Initial available times
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Reducer to update times based on selected date
const updateTimes = (state, action) => {
  // In real scenario, update times based on action.date
  if (action.type === "UPDATE_TIMES") {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
  return state;
};

function Reservation() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default Reservation;
