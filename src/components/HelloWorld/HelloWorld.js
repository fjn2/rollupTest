import React from 'react';
import styled from 'styled-components';

const StyledHelloWorld = styled.div`
  background: red;
`;

const HelloWorld = () => {
  return (
    <StyledHelloWorld>
      HOLA
    </StyledHelloWorld>
  );
};

export default HelloWorld;

