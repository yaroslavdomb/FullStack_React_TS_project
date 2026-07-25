import { useState } from 'react';
import { Tooltip } from 'flowbite-react';

import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GiFeather } from 'react-icons/gi';
import { LuBaby } from 'react-icons/lu';

import EditAuthModal from '../EditAuthModal/EditAuthModal';

function deleteBook() {}

function editBook() {}

function BookCard() {
  const [selectedBook, setSelectedBook] = useState<boolean>(false);
  const [openEditAuthModal, setOpenEditAuthModal] = useState<boolean>(false);
  const [authorName, setAuthorName] = useState<string>('qwerty');

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
      <div className="flex flex-row justify-center items-center border-2 border-fuchsia-500 rounded-3xl p-3 gap-2 hover:gap-8">
        <Tooltip
          content={selectedBook ? 'Dislike this book' : 'Like this book'}
          className="-translate-y-2"
        >
          <button
            onClick={() => setSelectedBook(!selectedBook)}
            className="cursor-pointer hover:scale-200"
          >
            {selectedBook ? <BsSuitHeartFill /> : <BsSuitHeart />}
          </button>
        </Tooltip>

        <Tooltip content={`Author: ${authorName}`} className="-translate-y-2">
          <LuBaby
            className="hover:scale-200 cursor-pointer"
            onClick={() => setOpenEditAuthModal(true)}
          />
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

      <EditAuthModal
        isOpen={openEditAuthModal}
        setIsOpen={setOpenEditAuthModal}
        currentVal={authorName}
        onSave={setAuthorName}
        discardChangeLbl="Discard changes"
        acceptChangeLbl="Accept changes"
        modalTitle="Change author name"
        placeholder="Enter new author name"
        newValID="new-author-id"
        oldValID="old-author-id"
        changedValue="author name"
      />
    </div>
  );
}

export default BookCard;
