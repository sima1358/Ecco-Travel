import React, { useState } from "react";
import moment from 'moment';



export default function FromTo() {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const handleDateFromChange = (event) => {
    setDateFrom(event.target.value);
  };

  const handleDateToChange = (event) => {
    const selectedDate = event.target.value;
    if (new Date(selectedDate) >= new Date(dateFrom)) {
      setDateTo(selectedDate);
    } else {
      alert("Date to cannot be earlier than the departure date.");
    }
  };

  // here we calculate the total number of days between dateFrom and dateTo
  const getTotalDays=()=>{
    const startDate = moment(dateFrom);
    const endDate = moment(dateTo);

    // Add 1 to include both the start and end dates
    return endDate.diff(startDate, 'days') + 1
  }

  return (
    <div>
      <label htmlFor="date-from">Date From: </label>

      <input
        type="date"
        id="date-from"
        value={dateFrom}
        onChange={handleDateFromChange}
      />

      <label htmlFor="date-to">Date To:</label>

      <input
        type="date"
        id="date-to"
        value={dateTo}
        onChange={handleDateToChange}
      />
    </div>
  );
}
