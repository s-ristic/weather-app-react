import React from 'react';
import styled, { keyframes } from 'styled-components';

function Loading() {
  return (
    <Container>
      <Circle />
    </Container>
  );
}

export default React.memo(Loading);

const Container = styled.div`
  position: absolute;
  top: 20rem;
  left: 50%;
  transform: translateX(-50%);
  width: 21rem;
  height: 21rem;
  display: flex;
  border-radius: 2rem;
  backdrop-filter: blur(0.3rem);
  z-index: 10;
`;

const rotate = keyframes`
 to {
    transform: rotate(360deg);
  }
`;

const Circle = styled.div`
  margin: auto;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  border: 1.5rem solid var(--light-color);
  border-top-color: var(--primary-color);
  border-right-color: var(--primary-color);
  animation: ${rotate} 1s linear infinite;
`;
