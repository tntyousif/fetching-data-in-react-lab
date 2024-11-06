// src/components/StarshipList.jsx
import StarshipCard from './StarshipCard';

const StarshipList = (props) => {
  return (
    <div>
      <h2>Starships</h2>
      <p>Number of results:({props.starships.length})</p>
      <div>
        {props.starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </div>
    </div>
  );
};

export default StarshipList;