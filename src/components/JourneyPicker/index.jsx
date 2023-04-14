import React, { useEffect, useState } from 'react';
import mapImage from './img/map.svg';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {

  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  const handleSubmit = (event) => {
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`)
      .then((response) => response.json())
      .then((data) => onJourneyChange(data.results))
    if (fromCity === toCity) {
      alert("Místo odjezdu a místo příjezdu se musí lišit.")
    }
    event.preventDefault();
  }

  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
      .then((response) => response.json())
      .then((data) => setCities(data.results))
      , fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates')
        .then((response) => response.json())
        .then((data) => setDates(data.results))
  }, []);


  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form onSubmit={handleSubmit} className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select value={fromCity} onChange={(e) => setFromCity(e.target.value)}>
            <option value="">Vyberte</option>
              {cities.map((city) => (
                <CityOptions
                  name={city.name}
                  code={city.code}
                  key={city.code}
                />
              ))}
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
            <option value="">Vyberte</option>
              {cities.map((city) => (
                <CityOptions
                  name={city.name}
                  code={city.code}
                  key={city.code}
                />
              ))}
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <option value="">Vyberte</option>
              {dates.map((date) => (
                <DatesOptions
                  dateBasic={date.dateBasic}
                  dateCs={date.dateCs}
                  key={date.dateBasic}
                />
              ))}
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              disabled={!fromCity || !toCity || !date}
              className="btn"
              type="submit"
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};

const CityOptions = ({ name,code }) => {
  return (
    <>
      <option value={code}>{name}</option>
    </>
  );
};

const DatesOptions = ({ dateBasic, dateCs }) => {
  return (
    <>
      <option value={dateBasic}>{dateCs}</option>
    </>
  );
};
