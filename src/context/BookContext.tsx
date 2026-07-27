import { createContext, useState, type ReactNode } from 'react';
import { type Book } from '../models/Book';

interface BookContextType {
  books: Array<Book>;
  setBooks: (books: Array<Book>) => void;
}

export const BookContext = createContext<BookContextType | null>(null);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Array<Book>>([]);

  return <BookContext.Provider value={{ books, setBooks }}> {children} </BookContext.Provider>;
};
