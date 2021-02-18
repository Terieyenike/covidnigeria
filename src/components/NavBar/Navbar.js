import { Div, Section } from './Navbar.style';
import Container from '../Container';

const Navbar = ({ handleChange }) => {
  return (
    <Section>
      <Container>
        <Div>
          <h1>Covid-19 in Nigeria</h1>
          <input
            aria-label='Search'
            placeholder={'Search by states'}
            onChange={handleChange}
          />
        </Div>
      </Container>
    </Section>
  );
};

export default Navbar;
