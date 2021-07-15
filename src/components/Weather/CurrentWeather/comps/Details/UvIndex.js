import React from 'react';
import styled from 'styled-components';

function UvIndex({ uv }) {
  let description = null;

  if (uv <= 2) description = 'low';
  if (uv > 2 && uv <= 5) description = 'moderate';
  if (uv > 5 && uv <= 7) description = 'high';
  if (uv > 7 && uv <= 10) description = 'very high';
  if (uv > 10) description = 'extreme';

  return (
    <Container>
      <Text>UV Index</Text>
      <Value>
        {uv} <span>{description}</span>
      </Value>
      <Legend>
        <span>0</span>
        <span>3</span>
        <span>6</span>
        <span>9</span>
        <span>12</span>
      </Legend>
      <Scale>
        <Indicator style={{ left: `calc(100% / 15 * ${uv} + .4rem)` }} />
      </Scale>
    </Container>
  );
}

export default UvIndex;

const Container = styled.div`
  width: 120%;
  margin-left: -20%;
  text-align: center;
`;

const Text = styled.span`
  font-size: 1.2rem;
  color: var(--dark-color);
`;

const Value = styled.span`
  display: block;
  margin-bottom: 1rem;
  color: var(--dark-color);

  span {
    font-size: 1.2rem;
  }
`;

const Legend = styled.div`
  display: flex;
  text-align: left;

  span {
    flex: 1;
  }
`;

const Scale = styled.div`
  position: relative;
  width: 100%;
  height: 0.5rem;
  background: linear-gradient(90deg, green 17%, yellow 34%, orange 51%, red 68%, violet 85%);
`;

const Indicator = styled.span`
  display: block;
  position: absolute;
  top: -0.25rem;
  width: 0.2rem;
  height: 1rem;
  background: var(--dark-color);
`;
