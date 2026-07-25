import { useState } from 'react';
import { Button, Tooltip } from 'flowbite-react';

import { BsSuitHeart } from 'react-icons/bs';
import { BsSuitHeartFill } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GiFeather } from 'react-icons/gi';
import { LuBaby } from 'react-icons/lu';

function deleteBook() {}

function editBook() {}

function BookCard() {
  const [selectedBook, setSelectedBook] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col justify-center items-center w-72 h-72
      min-[400px]:w-96 min-[400px]:h-96 
      min-[700px]:w-72 min-[700px]:h-72
      min-[800px]:w-96 min-[800px]:h-96 
      border-4 border-cyan-500 rounded-3xl p-5 gap-2"
    >
      <img
        className="w-60 h-60 md:w-80 md:h-80 border-2 border-emerald-500 rounded-3xl p-5"
        alt="No book cover found"
        src="<URL of book cover>"
      />
      <div className="flex flex-row justify-start items-start border-2 border-fuchsia-500 rounded-3xl p-5 gap-3.5 hover:gap-12">
        <Tooltip content="Author name: XXX" className="-translate-y-2">
          <LuBaby className="hover:scale-200 cursor-pointer" />
        </Tooltip>

        <Tooltip content="Edit book description" className="-translate-y-2">
          <GiFeather
            className="hover:scale-200 cursor-pointer"
            onClick={editBook}
          />
        </Tooltip>

        <Tooltip content="Delete book" className="-translate-y-2">
          <RiDeleteBinLine
            className="hover:scale-200 cursor-pointer"
            onClick={deleteBook}
          />
        </Tooltip>
      </div>
    </div>
  );
}

export default BookCard;
