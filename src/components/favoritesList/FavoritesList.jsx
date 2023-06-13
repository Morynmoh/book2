import Favorites from '../favorites/Favorites';
import './favoritesList.css';

const FavoritesList = ({ favorites, onRemoveFromFavorites }) => {
  return (
    <div>
      <h1>Favourite Books</h1>
      <Favorites favorites={favorites} onRemoveFromFavorites={onRemoveFromFavorites} />
    </div>
  );
};

export default FavoritesList;
