import { Div, Section } from './Navbar.style';
import Container from '../Container';

const Navbar = ({ handleChange, covid }) => {
  return (
    <Section>
      <Container>
        <Div>
          <h1>{covid}</h1>
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
