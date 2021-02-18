import {
  Section,
  Bg,
  H1,
  Grid,
  P,
  // Loading,
} from './HomePage.style';
import Container from '../../components/Container';

const HomePage = ({ filteredProfiles }) => {
  // if (loading) {
  //   return (
  //     <Container>
  //       <Loading>Loading...Please wait</Loading>
  //     </Container>
  //   );
  // }
  return (
    <Section>
      <Container>
        <Grid>
          {filteredProfiles.map((profile, id) => (
            <Bg key={id} className='box'>
              <H1>{profile.state}</H1>
              <P>
                Confirmed cases: <span>{profile.confirmedCases}</span>
              </P>
              <P>
                Cases on Admission:<span>{profile.casesOnAdmission}</span>
              </P>
              <P>
                Discharged: <span>{profile.discharged}</span>
              </P>
              <P>
                Death: <span>{profile.death}</span>
              </P>
            </Bg>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default HomePage;
