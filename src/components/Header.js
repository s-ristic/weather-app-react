import React from 'react';
import styled from 'styled-components';

import bg from '../images/bg-logo.jpg';

function Header() {
  return (
    <Container>
      <Logo>Weather</Logo>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: 100%;
  background: var(--primary-color);
  padding: 1rem 5rem;
`;

const Logo = styled.h1`
  font-size: 4rem;
  color: transparent;
  text-align: center;
  background: url(${bg}) center/cover;
  -webkit-background-clip: text;
  -webkit-text-stroke: 0.1rem var(--light-color);
  letter-spacing: 1rem;
  padding-left: 1rem;
`;
