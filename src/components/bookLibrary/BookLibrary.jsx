import { useState } from "react";
import Search from "../search/Search";
import FavoritesList from "../favoritesList/FavoritesList";
import Footer from "../footer/Footer";
import BookList from "../bookList/BookList";
import BookDetails from "../bookDetails/BookDetails";
import NavBar from "../navBar/NavBar";

import "./bookLibrary.css";

function BookLibrary() {
  const [favorites, setFavorites] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const addToFavorites = (book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };

  const removeFromFavorites = (book) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favBook) => favBook.id !== book.id)
    );
  };

  const handleClickThumbnail = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
  };

  return (
    <div className="BookLibrary">
      <NavBar />
      <div className="image-container">
        <img src="./images/CA-Preparation-Books.jpg" alt="Background" />
        <div className="search-container">
          <Search onAddToFavorites={addToFavorites} />
        </div>
      </div>

      <div className="side">
        <div className="booklist">
          <BookList
            onAddToFavorites={addToFavorites}
            onClickThumbnail={handleClickThumbnail}
          />
        </div>
        <div className="favourites">
          <FavoritesList
            favorites={favorites}
            onRemoveFromFavorites={removeFromFavorites}
          />
        </div>
      </div>

      <Footer />

      {selectedBook && (
        <BookDetails book={selectedBook} onClose={handleCloseDetails} />
      )}
    </div>
  );
}

export default BookLibrary;
