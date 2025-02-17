import { useState } from "react";
import {fetchAPI} from "./Api"

function Booking({availableTimes, dispatch, submitForm}){
    // State variables for form fields
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occassion, setOccasion] = useState("");
    const [error, setError] = useState({});

    // Handle date change and fetch new available times
    const handleDateChange = async(e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);

        const newTimes = await fetchAPI(selectedDate); // Fetch new times for selected date
        dispatch({ type: "UPDATE_TIMES", payload: newTimes }); // Update available times
    }

    // Validate form fields
    const validateForm = () => {
      let newErrors = {};
      if(!date) newErrors.date = "Please select a date"
      if(!time) newErrors.time = "Please select a time"
      if(guests < 1 || guests > 10) newErrors.guests = "Guests must be between 1 and 10."
      
      setError(newErrors);
      return Object.keys(newErrors).length === 0;
    }

    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();

      if(!validateForm()) return;

      const formData = { date, time, guests, occassion };
      submitForm(formData); // Call submitForm from props
    };

    return(
        <>
        <article>
        <form onSubmit={handleSubmit} className="form">
          <div className="inputBox">
            <label htmlFor="res-date">Choose Date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} aria-required="true" required/>
            {error.date && <p style={{ color: "red" }}>{error.date}</p>}
          </div>

          <div className="inputBox">
          <label htmlFor="res-time">Choose Time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} aria-required="true" required>
                 <option value="" disabled>Select a time</option>
                 {availableTimes.map((t, index) => (
                    <option key={index} value={t}>{t}</option>
                 ))}
            </select>
            {error.time && <p style={{ color: "red" }}>{error.time}</p>}
          </div>

          <div className="inputBox">
             <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} aria-required="true" required></input>
            {error.guests && <p style={{ color: "red" }}>{error.guests}</p>}
          </div>

          <div className="inputBox">
          <label hmtlFor="occasion">Occassion</label>
            <select id="occasion" value={occassion} onChange={(e) => setOccasion(e.target.value)} aria-required="true" required>
              <option value="" disabled>Select an Occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>

            <button type="submit" aria-label="Submit Booking" disabled={Object.keys(error).length > 0}>SUBMIT</button>
        </form>
        </article>


        </>
    )
}


export default Booking;