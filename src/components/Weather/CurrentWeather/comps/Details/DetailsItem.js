import React from 'react';
import styled from 'styled-components';

function DetailsItem({ text, value, unit, icon }) {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <div>
        <Text>{text}</Text>
        <Value>{value}</Value>
        <Unit>{unit}</Unit>
      </div>
    </Container>
  );
}

export default DetailsItem;

const Container = styled.div`
  display: flex;
  align-items: flex-start;

  :nth-child(even) {
    justify-content: flex-end;
  }
`;

const Icon = styled.span`
  margin-right: 0.5rem;
  font-size: 3rem;
`;

const Text = styled.span`
  display: block;
  color: var(--dark-color);
  text-transform: capitalize;
  font-size: 1.2rem;
`;

const Value = styled.span`
  color: var(--dark-color);
`;

const Unit = styled.span`
  color: var(--dark-color);
  font-size: 1.2rem;
`;
