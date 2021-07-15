import React from 'react';
import styled from 'styled-components';

function Description({ data }) {
  const { day, icon, text } = data;

  return (
    <Container>
      <img src={`./images/icons/${day}/${icon.slice(-7)}`} alt='' />
      <div>{text}</div>
    </Container>
  );
}

export default Description;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--light-color);
  font-size: 1.2rem;
  padding: 2rem 0;

  img {
    width: 6rem;
    height: 6rem;
  }
`;
