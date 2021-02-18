import styled from 'styled-components';

export const Section = styled.section`
  padding: 1.5em 0;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 0.5em 1em;
    appearance: none;
    border: unset;
    background: #ffc857;
    color: #000;
    border-radius: 4px;
  }
  button + button {
    margin-left: 10px;
  }
`;
