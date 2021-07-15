import React, { useState } from 'react';
import styled from 'styled-components';

import HoursItem from './HoursItem';

function Hours({ data }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow((prevState) => !prevState);

  const buttonText = show ? 'show less' : 'show more';

  return (
    <Container>
      <button onClick={handleShow}>{buttonText}</button>
      {show && data.map((item) => <HoursItem key={item.time} data={item} />)}
    </Container>
  );
}

export default Hours;

const Container = styled.div`
  margin-top: 2rem;

  button {
    display: block;
    width: max-content;
    margin: 0 auto 2rem;
    padding: 0.5rem 1rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
