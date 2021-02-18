import styled from 'styled-components';

export const Section = styled.section`
  padding: 1em 0;
  position: sticky;
  top: 0;
  background: #040f16;
  z-index: 999;
`;

export const Div = styled.div`
  h1 {
    color: #ffc857;
    font-size: 1.5rem;
  }
  input {
    width: 100%;
    background: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png');
    background-repeat: no-repeat;
    background-position: right;
    background-origin: content-box;
    background-size: 29px 30px;
    appearance: none;
    border: 1px solid #fdfffc;
    color: #fdfffc;
    padding: 1em;
    border-radius: 4px;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      max-width: 60%;
    }
  }
`;
