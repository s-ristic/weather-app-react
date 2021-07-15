import React from 'react';
import styled from 'styled-components';

function Air({ data }) {
  const index = data['us-epa-index'];
  let description = null;

  if (index === 1) description = 'Good';
  if (index === 2) description = 'Moderate';
  if (index === 3) description = 'Unhealthy for sensitive group';
  if (index === 4) description = 'Unhealthy';
  if (index === 5) description = 'Very unhealthy';
  if (index === 6) description = 'Hazardous';

  return (
    <Container>
      <h2>Air Quality</h2>
      <Value>
        {index} <span>{description}</span>
      </Value>
      <Legend>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
      </Legend>
      <Scale>
        <Indicator style={{ left: `calc(100% / 6 * ${index} - 2.2rem)` }} />
      </Scale>
    </Container>
  );
}

export default React.memo(Air);

const Container = styled.div`
  background: var(--light-color);
  padding: 0 2rem 4rem;
`;

const Value = styled.span`
  display: block;
  margin: 1rem 0;
  color: var(--dark-color);

  span {
    font-size: 1.2rem;
  }
`;

const Legend = styled.div`
  display: flex;

  span {
    flex: 1;
    text-align: center;
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
