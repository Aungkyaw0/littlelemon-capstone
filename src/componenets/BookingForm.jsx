import { useEffect, useState } from "react";
import GuestLayout from "../layouts/GuestLayout";
import "../styles/reservation_form.css";

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // On component mount, fetch times for today's date
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
    dispatch({ type: "UPDATE_TIMES", date: today });
  }, [dispatch]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
      name,
      email,
      phone,
    };

    const success = submitAPI(formData);
    if (success) {
      alert("Booking submitted!");
    } else {
      alert("Submission failed.");
    }
  };

  return (
    <GuestLayout>
      <div className="reservation-container">
        <form className="reservation-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Book Now</h2>

          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label htmlFor="res-date">Choose Date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            required
          />

          <label htmlFor="res-time">Choose Time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">-- Select Time --</option>
            {availableTimes.map((t, i) => (
              <option key={i} value={t}>
                {t}
              </option>
            ))}
          </select>

          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            max="10"
            required
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option value="">-- Select Occasion --</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <input type="submit" value="Make Your Reservation" />
        </form>
      </div>
    </GuestLayout>
  );
}

export default BookingForm;
