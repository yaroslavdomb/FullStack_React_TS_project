import { useState } from 'react';
import { BsSuitHeart } from 'react-icons/bs';
import { BsSuitHeartFill } from 'react-icons/bs';

function BookCard() {
  const [selectedBook, setSelectedBook] = useState<boolean>(false);

  return (
    <>
      <img alt="No book cover found" src="<URL of book cover>" />
      <button onClick={() => setSelectedBook(!selectedBook)}>
        {selectedBook ? <BsSuitHeartFill /> : <BsSuitHeart />}
      </button>
      {/* <button onClick="editBook">Edit</button>
      <button>
        Icon of delete basket
        <img alt="Drop book card icon" />
      </button> */}
    </>
  );
}

export default BookCard;
