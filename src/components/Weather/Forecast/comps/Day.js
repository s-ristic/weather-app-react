import React from 'react';
import styled from 'styled-components';

import Details from './Details';
import Hours from './Hours';

import { round } from '../../../../helpers/index';

function Day({ title, data }) {
  const { hour } = data;

  const hours = [];

  for (let i = 0; i < hour.length - 1; i = i + 3) {
    hours.push(hour[i]);
  }

  let {
    astro: { sunrise, sunset },
    day: {
      condition: { icon },
      maxtemp_c,
      mintemp_c,
    },
  } = data;

  sunrise = sunrise.slice(0, 5);
  sunset = sunset.slice(0, 5);

  const mintemp = round(mintemp_c);
  const maxtemp = round(maxtemp_c);

  return (
    <Container>
      <Title>
        <h2>{title}</h2>
        <img src={`./images/icons/day/${icon.slice(-7)}`} alt='' />
      </Title>
      <Details data={{ sunrise, sunset, mintemp, maxtemp }} />
      <Hours data={hours} />
    </Container>
  );
}

export default Day;

const Container = styled.section`
  margin-bottom: 2rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    margin-right: 1rem;
  }
`;
