import axios from "axios";
import type { Book } from "../types/book";

export const searchBooks = async (query: string): Promise<Book[]> => {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`,
  );

  return response.data.items.map((item: any) => ({
    id: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors,
    thumbnail: item.volumeInfo.imageLinks?.thumbnail,
  }));
};
