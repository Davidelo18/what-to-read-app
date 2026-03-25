import { useState } from "react";
import type { Book } from "./types/book";
import { SearchBar } from "./components/SearchBar";
import { BookList } from "./components/BookList";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  return (
    <div>
      <h1>What to Read 📚</h1>
      <SearchBar onResults={setBooks} />
      <BookList books={books} />
    </div>
  );
}

export default App;
