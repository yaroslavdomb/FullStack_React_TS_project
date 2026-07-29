import { createContext, useState, useMemo, type ReactNode } from 'react';
import { type Book } from '../models/Book';
import { filterBooks } from './filterBooks';

interface BookContextType {
  books: Book[];
  setBooks: (books: Book[]) => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchCategory: string;
  setSearchCategory: (category: string) => void;

  filterQuery: string;
  setFilterQuery: (query: string) => void;
  filterCategory: string;
  setFilterCategory: (category: string) => void;

  filteredBooks: Book[];
  hideBook: (id: string) => void;
  setHiddenBookIds: (ids: Array<string>) => void;
  selectedCard: Book | null;
  setSelectedCard: (book: Book | null) => void;
}

export const BookContext = createContext<BookContextType | null>(null);

export function BookProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Array<Book>>([]);
  const [hiddenBookIds, setHiddenBookIds] = useState<Array<string>>([]);
  const [searchCategory, setSearchCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedCard, setSelectedCard] = useState<Book | null>(null);

  const hideBook = (id: string) => {
    setHiddenBookIds((alreadyHiddens) => [...alreadyHiddens, id]);
  };

  const filteredBooks = useMemo(() => {
    const visibleBooks: Array<Book> = books.filter((book) => !hiddenBookIds.includes(book.id));
    return filterBooks(visibleBooks, filterCategory, filterQuery);
  }, [books, hiddenBookIds, filterCategory, filterQuery]);

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        searchCategory,
        setSearchCategory,
        searchQuery,
        setSearchQuery,
        filterCategory,
        setFilterCategory,
        filterQuery,
        setFilterQuery,
        filteredBooks,
        hideBook,
        selectedCard,
        setSelectedCard,
        setHiddenBookIds,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
