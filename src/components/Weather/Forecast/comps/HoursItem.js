import React from 'react';
import styled from 'styled-components';

import { round, isDay } from '../../../../helpers/index';

function HoursItem({ data }) {
  let {
    time,
    condition: { icon },
    feelslike_c,
    is_day,
    temp_c,
  } = data;

  time = time.slice(-5);
  icon = icon.slice(-7);

  const temp = round(temp_c);
  const feels = round(feelslike_c);

  const day = isDay(is_day);

  return (
    <Container>
      <Time>{time}</Time>
      <Img src={`./images/icons/${day}/${icon}`} alt='' />
      <Temp>{temp}°</Temp>
      <Feels>Feels like: {feels}°</Feels>
    </Container>
  );
}

export default HoursItem;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Time = styled.span``;
const Img = styled.img`
  width: 4rem;
  height: 4rem;
`;
const Temp = styled.span`
  font-size: 1.4rem;
`;

const Feels = styled.span`
  font-size: 1.2rem;
  color: var(--dark-color);
`;
