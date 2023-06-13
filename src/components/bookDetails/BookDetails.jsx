

const BookDetails = ({ book }) => {
  if (!book) {
    return null;
  }

  const { volumeInfo } = book;

  return (
    <div>
      <div>
        {volumeInfo.imageLinks && (
          <img src={volumeInfo.imageLinks.thumbnail} alt="Book Thumbnail" />
        )}
      </div>
      <div>
        {volumeInfo.title && <h3>{volumeInfo.title}</h3>}
        {volumeInfo.subtitle && <h4>{volumeInfo.subtitle}</h4>}
        {book.kind && <p>Kind: {book.kind}</p>}
        {volumeInfo.authors && (
          <p>Authors: {volumeInfo.authors.join(', ')}</p>
        )}
        {volumeInfo.publishedDate && (
          <p>Published Date: {volumeInfo.publishedDate}</p>
        )}
        {volumeInfo.previewLink && (
          <a target="_blank" rel="noopener noreferrer" href={volumeInfo.previewLink}>
            Preview Link
          </a>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
