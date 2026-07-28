import { categoryMapper } from '../components/BookCard';
import type { Book } from '../models/Book';

export const filterBooks = (bookList: Array<Book>, category: string, query: string): Array<Book> => {
  if (!category || !query.trim()) return bookList;

  const key = categoryMapper[category] as keyof Book;
  const passedFilter: Array<Book> = bookList.filter((book) => book[key].toString().includes(query));
  console.table(passedFilter);

  return passedFilter;
};
