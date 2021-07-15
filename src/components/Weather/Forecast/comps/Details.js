import React from 'react';
import styled from 'styled-components';

import DetailsItem from './DetailsItem';

function Details({ data }) {
  const { sunrise, sunset, mintemp, maxtemp } = data;

  const details = [
    {
      text: 'sunrise',
      value: sunrise,
      unit: 'am',
    },
    {
      text: 'sunset',
      value: sunset,
      unit: 'pm',
    },
    {
      text: 'min temp',
      value: mintemp,
      unit: '°',
    },
    {
      text: 'max temp',
      value: maxtemp,
      unit: '°',
    },
  ];

  return (
    <Container>
      {details.map((item) => (
        <DetailsItem key={item.text} {...item} />
      ))}
    </Container>
  );
}

export default Details;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
