import { type Book } from '../../../models/Book';
import { categoryMapper } from '../../BookCard/types';

export function filterBooks(booksList: Array<Book>, category: string, query: string) {
  const key = categoryMapper[category] as keyof Book;
  const filteredBooks = booksList.filter((currentBook) => {
    return currentBook[key].toString().includes(query);
  });

  console.log(JSON.stringify(filteredBooks, null, 2));
  return filteredBooks;
}
