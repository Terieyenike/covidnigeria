import { Section, Div, P } from './Stats.style';
import Container from '../Container';

const Stats = ({ stats }) => {
  return (
    <Section>
      <Container>
        <Div>
          <P>
            Total sample tested: <span>{stats.totalSamplesTested}</span>
          </P>
          <P>
            Total confirmed cases: <span>{stats.totalConfirmedCases}</span>
          </P>
          <P>
            Total active cases: <span>{stats.totalActiveCases}</span>
          </P>
          <P>
            Discharged: <span>{stats.discharged}</span>
          </P>
          <P>
            Death: <span>{stats.death}</span>
          </P>
        </Div>
      </Container>
    </Section>
  );
};

export default Stats;
