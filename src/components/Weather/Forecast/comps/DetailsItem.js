import React from 'react';
import styled from 'styled-components';

function DetailsItem({ text, value, unit }) {
  return (
    <Container>
      <Text>{text}:</Text>
      <span>
        {value}
        {unit}
      </span>
    </Container>
  );
}

export default DetailsItem;

const Container = styled.div`
  color: var(--dark-color);
  font-size: 1.2rem;
  display: flex;
  align-items: flex-start;

  :nth-child(even) {
    justify-content: flex-end;
  }
`;

const Text = styled.span`
  text-transform: capitalize;
  margin-right: 0.3rem;
`;
