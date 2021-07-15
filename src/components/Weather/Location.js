import React from 'react';
import { BiCurrentLocation } from 'react-icons/bi';

import styled from 'styled-components';

function Location({ data }) {
  const { name, country } = data;

  return (
    <Container>
      <Icon />
      <div>
        <City>{name},</City>
        <Country>{country}</Country>
      </div>
    </Container>
  );
}

export default React.memo(Location);

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--light-color);
`;

const Icon = styled(BiCurrentLocation)`
  font-size: 2.4rem;
  margin-right: 0.5rem;
`;

const City = styled.span`
  display: block;
  letter-spacing: 0.1rem;
`;

const Country = styled.span`
  font-size: 0.8em;
`;
