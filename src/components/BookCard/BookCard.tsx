import { useState } from 'react';
import { BsSuitHeart } from 'react-icons/bs';
import { BsSuitHeartFill } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GiFeather } from 'react-icons/gi';

function deleteBook() {}

function editBook() {}

function BookCard() {
  const [selectedBook, setSelectedBook] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center items-center w-72 h-72 md:w-96 md:h-96 border-4 border-cyan-500 rounded-3xl p-5 gap-2">
      <img
        className="w-60 h-60 md:w-80 md:h-80 border-2 border-emerald-500 rounded-3xl p-5"
        alt="No book cover found"
        src="<URL of book cover>"
      />
      <div className="flex flex-row justify-start items-start border-2 border-fuchsia-500 rounded-3xl p-5 gap-3.5 hover:gap-12">
        <button
          onClick={() => setSelectedBook(!selectedBook)}
          className="cursor-pointer hover:scale-200"
        >
          {selectedBook ? <BsSuitHeartFill /> : <BsSuitHeart />}
        </button>
        <button
          onClick={editBook}
          className="flex flex-row items-center cursor-pointer hover:scale-200 gap-0.5"
        >
          <GiFeather />
          <span className="-mt-0.5 leading-none">Edit</span>
        </button>
        <button onClick={deleteBook} className="cursor-pointer hover:scale-200">
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
}

export default BookCard;
