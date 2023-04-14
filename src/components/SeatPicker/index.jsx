import React from 'react';
import SeatRow from '../SeatRow';
import './style.css';

const SeatPicker = ({ seats, journeyId, selectedSeat, onSeatSelected }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
      {seats.map((row, index) => (
          <SeatRow 
            row={row}
            key={index}
            rowSelectedSeat={selectedSeat}
            onSeatSelected={onSeatSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default SeatPicker; 