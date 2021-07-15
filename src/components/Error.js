import React from 'react';
import styled from 'styled-components';

function Error({ errorMsg }) {
  const { status, data } = errorMsg;

  return (
    <Container>
      <Code>Error: {status}</Code>
      <Message>{data.error?.message || 'Something went wrong.'}</Message>
    </Container>
  );
}

export default React.memo(Error);

const Container = styled.div`
  position: absolute;
  top: 20rem;
  left: 5%;
  width: 90%;
  color: var(--light-color);
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  box-shadow: var(--box-shadow);
`;

const Code = styled.h2`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const Message = styled.p`
  font-size: 2rem;
`;
