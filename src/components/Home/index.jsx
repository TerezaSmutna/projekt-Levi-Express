import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import JourneyDetail from '../JourneyDetail';
import './style.css';

export const Home = () => {

  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (travel) => {
    setJourney(travel);
  }

  console.log(journey);

  return (
    <main>
      <JourneyPicker
        onJourneyChange={handleJourneyChange}
      />
      {journey && <JourneyDetail journey={journey} />}
    </main>
  );
};
