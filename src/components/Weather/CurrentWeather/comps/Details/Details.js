import React from 'react';
import { RiCloudLine, RiBlazeLine, RiTempHotFill, RiEyeLine } from 'react-icons/ri';
import styled from 'styled-components';

import DetailsItem from './DetailsItem';
import Wind from './Wind';
import UvIndex from './UvIndex';

function Details({ data }) {
  const { cloud, humidity, pressure_mb, vis_km, wind, gust, wind_degree, uv } = data;

  const details = [
    {
      text: 'cloudiness',
      value: cloud,
      unit: '%',
      icon: <RiCloudLine />,
    },
    {
      text: 'humidity',
      value: humidity,
      unit: '%',
      icon: <RiBlazeLine />,
    },
    {
      text: 'pressure',
      value: pressure_mb,
      unit: 'mb',
      icon: <RiTempHotFill />,
    },
    {
      text: 'visibility',
      value: vis_km,
      unit: 'km',
      icon: <RiEyeLine />,
    },
  ];

  return (
    <Container>
      {details.map((item) => (
        <DetailsItem key={item.text} {...item} />
      ))}

      <Wind data={{ wind, gust, wind_degree }} />
      <UvIndex uv={uv} />
    </Container>
  );
}

export default Details;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  background: var(--light-color);
  padding: 4rem 2rem 2rem;
`;
