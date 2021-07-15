import React from 'react';
import styled from 'styled-components';

import Day from './comps/Day';

function Forecast({ data }) {
  return (
    <Container>
      <Day title='Today' data={data.forecastday[0]} />
      <Day title='Tomorrow' data={data.forecastday[1]} />
    </Container>
  );
}

export default React.memo(Forecast);

const Container = styled.div`
  background: var(--light-color);
  padding: 2rem;
`;
