import { useContext } from 'react';
import BookCard from '../BookCard/BookCard';
import { BookContext } from '../../context/BookContext';
import { type Book } from '../../models/Book';

function MainPage() {
  const { books } = useContext(BookContext)!;

  return (
    <div className="flex flex-wrap justify-center items-center gap-3.5 border-4 border-amber-500 rounded-3xl p-5">
      {books.map((book: Book) => (
        <BookCard key={book.id} currentBook={book} />
      ))}
    </div>
  );
}

export default MainPage;
