import React from 'react';
import { RiCelsiusFill } from 'react-icons/ri';
import styled from 'styled-components';

function Temp({ temp, feelslike }) {
  return (
    <Container>
      <Primary>
        {temp} <PrimaryIcon />
      </Primary>

      <Secondary>
        Feels like <span>{feelslike}</span> <SecondaryIcon />
      </Secondary>
    </Container>
  );
}

export default Temp;

const Container = styled.div`
  text-align: center;
  color: var(--light-color);
`;

const Primary = styled.span`
  display: block;
  font-size: 6rem;
`;

const PrimaryIcon = styled(RiCelsiusFill)`
  margin: 0 0 1.5rem -1.5rem;
  font-size: 0.5em;
`;

const Secondary = styled.span`
  display: block;
  background: var(--transparent-light);
  width: max-content;
  padding: 0.5rem 1rem;
  margin: 1rem auto;
  border-radius: 0.4rem;

  span {
    font-size: 2rem;
  }
`;

const SecondaryIcon = styled(RiCelsiusFill)`
  margin: 0 0 0.6rem -0.4rem;
  font-size: 0.6em;
`;
