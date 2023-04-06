import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';

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
      <div>{journey && `Nalezeno spojení s id ${journey.journeyId}`}</div>
    </main>
  );
};
