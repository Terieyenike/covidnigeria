import styled from 'styled-components';

export const Section = styled.section`
  padding: 1em 0;
  /* margin-top: 2em; */
`;

export const Bg = styled.div`
  background: #051620;
  border: 1px solid rgba(255, 255, 255, 0.1);
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.5em;
  border-radius: 6px;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 1.5em;
  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }
`;

export const H1 = styled.h1``;

export const P = styled.p`
  margin-bottom: 1.5em;
  color: #fafab8;
`;

// Tablet and big screen size media query
export const Grid = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5em;
    grid-auto-flow: dense;
    grid-auto-rows: 350px;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Loading = styled.h2`
  display: grid;
  place-items: center;
  min-height: 50vh;
  font-size: 1.5rem;
`;
