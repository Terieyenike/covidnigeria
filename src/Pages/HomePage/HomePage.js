import { Section, Bg, H1, Grid, P } from './HomePage.style';
import Container from '../../components/Container';

const HomePage = ({ results }) => {
  return (
    <Section>
      <Container>
        <Grid>
          {results.map((result, id) => (
            <Bg key={id} className='box'>
              <H1>{result.state}</H1>
              <P>
                Confirmed cases: <span>{result.confirmedCases}</span>
              </P>
              <P>
                Cases on Admission:<span>{result.casesOnAdmission}</span>
              </P>
              <P>
                Discharged: <span>{result.discharged}</span>
              </P>
              <P>
                Death: <span>{result.death}</span>
              </P>
            </Bg>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default HomePage;
