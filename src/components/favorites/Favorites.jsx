import BookCard from '../bookCard/BookCard';
import './favorites.css';

const Favorites = ({ favorites, onRemoveFromFavorites }) => {
  const removeFromFavorites = (book) => {
    onRemoveFromFavorites(book);
  };

  return (
    <div className="favorites">
      {/* <h2>Customer favorites eBooks</h2> */}
      <div className="favorites-grid">
        {favorites.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onRemoveFromFavorites={removeFromFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
