import { createContext, useState, useMemo, type ReactNode } from 'react';
import { type Book } from '../models/Book';
import { categoryMapper } from '../components/BookCard/types';

interface BookContextType {
  books: Book[];
  setBooks: (books: Book[]) => void;
  query: string;
  setQuery: (query: string) => void;
  category: string;
  setCategory: (category: string) => void;
  filteredBooks: Book[];
  hideBook: (id: string) => void;
}

export const BookContext = createContext<BookContextType | null>(null);

export function BookProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Array<Book>>([]);
  const [hiddenBookIds, setHiddenBookIds] = useState<Array<string>>([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  const hideBook = (id: string) => {
    setHiddenBookIds((alreadyHiddens) => [...alreadyHiddens, id]);
  };

  const filteredBooks = useMemo(() => {
    if (!query || !category) return books;

    const key = categoryMapper[category] as keyof Book;
    if (!key) return books;

    const passedFilter: Array<Book> = books
      .filter((book) => !hiddenBookIds.includes(book.id))
      .filter((book) => book[key].toString().includes(query));
    console.table(passedFilter);

    return passedFilter;
  }, [books, query, category]);

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        query,
        setQuery,
        category,
        setCategory,
        filteredBooks,
        hideBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
