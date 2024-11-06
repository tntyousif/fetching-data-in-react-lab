// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import { getStarships } from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await getStarships();
        setStarships(data);
        setFilteredStarships(data);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };

    fetchStarships();
  }, []);

  const handleSearch = (query) => {
    const filtered = starships.filter((starship) =>
      starship.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStarships(filtered);
  };

  return (
    <div>
      <StarshipSearch onSearch={handleSearch} />
      {filteredStarships.length > 0 ? (
        <StarshipList starships={filteredStarships} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;