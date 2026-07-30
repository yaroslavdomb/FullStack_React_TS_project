import { createContext, useState, useMemo, type ReactNode } from 'react';
import { type Book } from '../models/Book';
import { filterBooks } from './filterBooks';

interface BookContextType {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;

  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchCategory: string;
  setSearchCategory: React.Dispatch<React.SetStateAction<string>>;

  filterQuery: string;
  setFilterQuery: React.Dispatch<React.SetStateAction<string>>;
  filterCategory: string;
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>;

  filteredBooks: Book[];
  hideBook: (id: string) => void;
  hiddenBookIds: Array<string>;
  setHiddenBookIds: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCard: Book | null;
  setSelectedCard: React.Dispatch<React.SetStateAction<Book | null>>;

  allAuthors: Set<string>;
  setAllAuthors: React.Dispatch<React.SetStateAction<Set<string>>>;
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
  const [allAuthors, setAllAuthors] = useState<Set<string>>(new Set());

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
        hiddenBookIds,
        selectedCard,
        setSelectedCard,
        setHiddenBookIds,
        allAuthors,
        setAllAuthors,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
