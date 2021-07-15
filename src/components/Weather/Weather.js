import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import SearchCity from './SearchCity';
import Location from './Location';
import CurrentTimeDate from './CurrentTimeDate';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import Forecast from './Forecast/Forecast';
import Air from './Air';

import Loading from '../Loading';
import Error from '../Error';

function Weather() {
  const [city, setCity] = useState('');
  const [query, setQuery] = useState('Novi Sad');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [location, setLocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [air, setAir] = useState(null);

  const api_key = process.env.REACT_APP_API_KEY;

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${query}&days=2&aqi=yes&alerts=no`;

  const getData = useCallback(async () => {
    setIsLoading(true);

    try {
      const {
        data: { location, current, forecast },
      } = await axios.get(url);

      setLocation(location);
      setCurrentWeather(current);
      setForecast(forecast);
      setAir(current.air_quality);

      setIsLoading(false);
      setError(false);
    } catch (err) {
      if (err.response) {
        setErrorMsg(err.response);
      } else {
        console.error(err.message);
      }

      setIsLoading(false);
      setError(true);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <SearchCity data={{ city, setCity, setQuery }} />

      {!error && location && <Location data={location} />}

      <CurrentTimeDate />

      {!error && currentWeather && <CurrentWeather data={currentWeather} />}
      {!error && forecast && <Forecast data={forecast} />}
      {!error && air && <Air data={air} />}

      {isLoading && <Loading />}
      {error && <Error errorMsg={errorMsg} />}
    </>
  );
}

export default Weather;
