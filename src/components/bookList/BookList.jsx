import { useState, useEffect } from "react";
import axios from "axios";
import BookCard from '../bookCard/BookCard';
import './bookList.css';

function BookList({ onAddToFavorites }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=programming"
      );
      const data = response.data.items || [];
      setBooks(data);
    } catch (error) {
      console.log("Error occurred while fetching data:", error);
      setBooks([]);
    }
  };

  const addToFavorites = (book) => {
    onAddToFavorites(book);
  };

  return (
    <div>
      <h1>Book List</h1>
      <div className="book-container">
        {books.map((book) => (
          <BookCard book={book} onAddToFavorites={addToFavorites} key={book.id} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
