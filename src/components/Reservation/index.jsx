import React, { useState, useEffect } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';

const Reservation = () => {

  const { id } = useParams();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`)
      .then((response) => response.json())
      .then((data) => setReservation(data.results))
  }, []);

  return (
    <div className="reservation container">
      <h2>Vaše e-jízdenka č. {id}</h2>
      <div className="reservation__body">
        <div className="reservation__headings">
          <p>Datum cesty:</p>
          <p>Odjezd:</p>
          <p>Příjezd:</p>
          <p>Sedadlo:</p>
        </div>
        <div className="reservation__info">
          <p>{reservation && reservation.date}</p>
          <p>{reservation && reservation.fromCity.name}, {reservation && reservation.fromCity.time}</p>
          <p>{reservation && `${reservation.toCity.name}, ${reservation && reservation.toCity.time}`}</p>
          <p>{reservation && reservation.seatNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Reservation; 