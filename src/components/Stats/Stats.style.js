import styled from 'styled-components';

export const Section = styled.section`
  padding: 1em 0 0;
`;
export const Div = styled.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 2em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    grid-auto-flow: dense;
    grid-auto-rows: 35px;
  }
`;

export const P = styled.p`
  margin-top: 2em;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    margin: 0;
  }
`;
