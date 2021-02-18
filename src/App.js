import { useState, useEffect } from 'react';
import Navbar from './components/NavBar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import Pagination from './components/Pagination/Pagination';
import Stats from './components/Stats/Stats';

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [stats, setStats] = useState({});
  const [searchProfile, setSearchProfile] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(20);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    let url = 'https://covidnigeria.herokuapp.com/api';
    const res = await fetch(url);
    const data = await res.json();
    setProfiles(data.data.states);
    setStats(data.data);
    setLoading(false);
  };

  // change page - pagination
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const searchProfiles = (e) => {
    setSearchProfile(e.target.value);
  };

  const filteredProfiles = profiles
    .slice(indexOfFirstProfile, indexOfLastProfile)
    .filter((profile) =>
      profile.state.toLowerCase().includes(searchProfile.toLowerCase())
    );

  return (
    <>
      <Navbar handleChange={searchProfiles} value={searchProfile} />
      <Stats stats={stats} />
      <HomePage filteredProfiles={filteredProfiles} loading={loading} />
      <Pagination
        profilesPerPage={profilesPerPage}
        totalProfiles={profiles.length}
        paginate={paginate}
      />
    </>
  );
};

export default App;
