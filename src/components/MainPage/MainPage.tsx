import { useState, useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
//import '.MainPage.css';

function MainPage() {
  //const [books, setBooks] = useState([]);

  return (
    <div className="flex flex-wrap justify-center items-center gap-3.5 border-4 border-amber-500 rounded-3xl p-5">
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
    </div>
  );
}

export default MainPage;
