import { useEffect } from 'react';
import Container from './components/Container';
import { connect } from 'react-redux';
import { fetchResults, fetchData, setSearchField } from './actions/dataActions';

import { Loading } from './Pages/HomePage/HomePage.style';

import Navbar from './components/NavBar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import Stats from './components/Stats/Stats';

const App = ({ dispatch, results, loading, hasErrors, data, searchField }) => {
  useEffect(() => {
    dispatch(fetchResults());
    dispatch(fetchData());
  }, [dispatch]);

  const searchCovidNigeria = (e) => {
    dispatch(setSearchField(e.target.value));
  };

  const filterStates = results.filter((result) => {
    return result.state.toLowerCase().includes(searchField.toLowerCase());
  });

  const renderResults = () => {
    if (loading) {
      return (
        <Container>
          <Loading>Loading results. Please wait</Loading>
        </Container>
      );
    }
    if (hasErrors)
      return (
        <Container>
          <Loading>Unable to display covid data in Nigeria</Loading>
        </Container>
      );
    return <HomePage results={filterStates} />;
  };

  const renderData = () => {
    if (loading) {
      return (
        <Container>
          <p>Loading</p>
        </Container>
      );
    }
    if (hasErrors) {
      return <Container>No displayed data</Container>;
    }
    return <Stats stats={data} />;
  };

  return (
    <>
      <Navbar handleChange={searchCovidNigeria} />
      {renderData()}
      {renderResults()}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.results.loading,
  results: state.results.results,
  hasErrors: state.results.hasErrors,
  loaded: state.data.loaded,
  data: state.data.data,
  Errors: state.data.Errors,
  searchField: state.text.searchField,
});

export default connect(mapStateToProps)(App);
