import { useContext, useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
import { BookContext } from '../../context/BookContext';
import { type Book } from '../../models/Book';
import { ApiService } from '../../services/api-service';

function MainPage() {
  const { books, setBooks } = useContext(BookContext)!;

  useEffect(() => {
    const fetchAllBookCollection = async () => {
      console.log('Axios going to connect to DB to get all collection');
      const response = await ApiService.getAllBooks();
      if (response) {
        if (response.status.toString().startsWith('2')) {
          console.table(response.data);
          setBooks(response.data);
        }
      } else {
        console.error('No response!');
      }
    };

    fetchAllBookCollection();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-3.5 border-4 border-amber-500 rounded-3xl p-5">
      {books.map((book: Book) => (
        <BookCard key={book.id} currentBook={book} />
      ))}
    </div>
  );
}

export default MainPage;
