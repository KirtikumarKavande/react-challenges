import React, { useState } from "react";
import "./style.css";

/**
 * Utility function to generate seat arrays
 * @param {number} count - Total number of seats to generate
 * @param {string} type - Type of the seat (small, medium, large)
 * @returns {Array} Array of seat objects with seatNo, id, and type
 */
const generateSeats = (count, type) => {
  return Array.from({ length: count }, (_, index) => ({
    seatNo: index + 1,
    id: `${type}-${Date.now()}-${index}`, // Ensures uniqueness
    type,
  }));
};

const MovieTicketBooking = () => {
  // State to keep track of selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Generate seat data for all categories
  const smallSeats = generateSeats(16, "small");
  const mediumSeats = generateSeats(25, "medium");
  const largeSeats = generateSeats(36, "large");

  // Combine all seat arrays into one
  const allSeats = [...smallSeats, ...mediumSeats, ...largeSeats];

  // Handle seat selection
  const handleSeatSelect = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      // Deselect seat if already selected
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else if (selectedSeats.length < 5) {
      // Select seat if less than 5 are selected
      setSelectedSeats([...selectedSeats, seatId]);
    } else {
      alert("You can select a maximum of 5 seats across all categories.");
    }
  };

  return (
    <div>
      <div>
        <h2>Select Seats</h2>
        <div className="all-grid">
          {allSeats.map((seat) => (
            <div
              className={`all-grid-item ${selectedSeats.includes(seat.id) ? "selected" : ""}`}
              key={seat.id}
              onClick={() => handleSeatSelect(seat.id)}
            >
              {seat.seatNo} ({seat.type})
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3>Selected Seats:</h3>
        <ul>
          {selectedSeats.map((seatId) => (
            <li key={seatId}>
              {allSeats.find((seat) => seat.id === seatId)?.seatNo} (
              {allSeats.find((seat) => seat.id === seatId)?.type})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieTicketBooking;
