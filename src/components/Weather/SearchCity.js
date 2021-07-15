import React, { useRef, useEffect } from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import styled from 'styled-components';

function SearchCity({ data }) {
  const { city, setCity, setQuery } = data;

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setQuery(city);
    setCity('');
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Icon />
      <Input
        type='text'
        placeholder='Type your city and press Enter'
        ref={inputRef}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </Container>
  );
}

export default SearchCity;

const Container = styled.form`
  position: relative;
  width: 90%;
  margin: 1rem auto 0;
`;

const Icon = styled(FaSearchLocation)`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: var(--light-color);
  font-size: 1.5rem;
`;

const Input = styled.input`
  background: transparent;
  width: 100%;
  border-bottom: 0.2rem solid var(--light-color);
  color: var(--light-color);
  font-size: 1.6rem;
  padding: 1rem 3rem;
  border-radius: 0.8rem;

  &::placeholder {
    color: var(--light-color);
    font-size: 1.4rem;
  }
`;
