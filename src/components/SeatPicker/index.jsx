import React from 'react';
import Seat from '../Seat';
import './style.css';

const SeatPicker = () => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        <Seat number={1}/>
        <Seat number={17}/>
        <Seat number={33}/>
      </div>
    </div>
  );
};

export default SeatPicker; 