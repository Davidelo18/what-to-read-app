import { useState } from "react";
import { searchBooks } from "../features/fetchBooks";
import type { Book } from "../types/book";
import { debounce } from "lodash";

interface Props {
  onResults: (books: Book[]) => void;
}

export const SearchBar = ({ onResults }: Props) => {
  const [query, setQuery] = useState("");

  const debouncedSearch = debounce(
    async (query: string, onResults: (books: Book[]) => void) => {
      const results = await searchBooks(query);
      onResults(results);
    },
    500,
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          debouncedSearch(e.target.value, onResults);
        }}
      />
      <button onClick={debouncedSearch}>Search</button>
    </div>
  );
};
