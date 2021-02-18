import Container from '../Container';
import { Section, Div } from './Pagination.style';

const Pagination = ({ profilesPerPage, totalProfiles, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProfiles / profilesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <Section>
        <Container>
          <Div>
            {pageNumbers.map((number) => (
              <button key={number} onClick={() => paginate(number)}>
                {number}
              </button>
            ))}
          </Div>
        </Container>
      </Section>
    </>
  );
};

export default Pagination;
