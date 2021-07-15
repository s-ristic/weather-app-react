import React from 'react';
import styled from 'styled-components';

import compass from '../../../../../images/compass.png';

function Wind({ data }) {
  const { wind, gust, wind_degree } = data;

  return (
    <Container>
      <Speed>
        {wind}
        <span>kph</span>
      </Speed>
      <MaxSpeed>
        {gust}
        <span>kph</span>
      </MaxSpeed>
      <Arrow style={{ transform: `rotate(${wind_degree}deg)` }} />
    </Container>
  );
}

export default Wind;

const Container = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
  background: url(${compass}) center/100% 100%;
  display: flex;
`;

const Speed = styled.span`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 1.2rem;
  z-index: 1;

  span {
    font-size: 1rem;
  }
`;

const MaxSpeed = styled.span`
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  color: var(--danger-color);
  z-index: 1;

  span {
    font-size: 1.2rem;
  }
`;

const Arrow = styled.span`
  display: block;
  position: relative;
  width: 0.2rem;
  height: 3rem;
  margin: 1rem auto auto auto;
  background: var(--danger-color);
  transform-origin: bottom;
  opacity: 0.4;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 1rem solid var(--danger-color);
  }
`;
