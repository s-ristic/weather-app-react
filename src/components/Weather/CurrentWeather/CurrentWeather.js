import React from 'react';

import { Temp, Description, Details } from './comps/index';

import { round, isDay } from '../../../helpers/index';

function CurrentWeather({ data }) {
  const {
    cloud,
    condition: { icon, text },
    feelslike_c,
    gust_kph,
    temp_c,
    humidity,
    is_day,
    pressure_mb,
    uv,
    vis_km,
    wind_degree,
    wind_kph,
  } = data;

  // round
  const feelslike = round(feelslike_c);
  const gust = round(gust_kph);
  const temp = round(temp_c);
  const wind = round(wind_kph);

  // is day
  const day = isDay(is_day);

  return (
    <div>
      <Temp temp={temp} feelslike={feelslike} />
      <Description data={{ day, icon, text }} />

      <Details data={{ cloud, humidity, pressure_mb, vis_km, wind, gust, wind_degree, uv }} />
    </div>
  );
}

export default React.memo(CurrentWeather);
