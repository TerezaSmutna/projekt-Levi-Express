import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import JourneyDetail from '../JourneyDetail';
import SeatPicker from '../SeatPicker';
import './style.css';
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const navigate = useNavigate();

  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (travel) => {
    setJourney(travel);
  }

  console.log(journey);

  const handleBuy = () => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate(`/reservation/${data.results.reservationId}`);
      })
  }

  return (
    <main>
      <JourneyPicker
        onJourneyChange={handleJourneyChange}
      />
      {journey && <JourneyDetail journey={journey} />}
      {journey && <SeatPicker />}
      <div className="controls container">
        <button onClick={handleBuy} className="btn btn--big" type="button">Rezervovat</button>
      </div>
    </main>
  );
};
