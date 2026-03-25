import type { Book } from "../types/book";

interface Props {
  books: Book[];
}

export const BookList = ({ books }: Props) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          {book.thumbnail && <img src={book.thumbnail} alt={book.title} />}
          <h3>{book.title}</h3>
          <p>{book.authors?.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};
