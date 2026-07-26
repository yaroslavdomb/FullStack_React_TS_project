import { useState } from 'react';
import { Tooltip } from 'flowbite-react';

import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GiFeather } from 'react-icons/gi';
import { LuBaby, LuBookA } from 'react-icons/lu';

import EditModal from './EditModal';
import { type EditMode } from './types';
import { STATIC_MODAL_CONFIG } from './constants';

function deleteBook() {}

function BookCard() {
  const [selectedBook, setSelectedBook] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<EditMode>(null);
  const [authorName, setAuthorName] = useState<string>('defult author name');
  const [bookTitle, setBookTitle] = useState<string>('default book title');
  const [bookDescr, setBookDescr] = useState<string>('default book descr');

  const getCurrentConfig = () => {
    if (!editMode) return null;

    const dynamicData = {
      Author: { currentVal: authorName, onSave: setAuthorName },
      Title: { currentVal: bookTitle, onSave: setBookTitle },
      Description: { currentVal: bookDescr, onSave: setBookDescr },
    };

    return {
      ...STATIC_MODAL_CONFIG[editMode],
      ...dynamicData[editMode],
    };
  };

  const currentConfig = getCurrentConfig();

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
            onClick={() => setEditMode('Author')}
          />
        </Tooltip>

        <Tooltip
          content={`Book title: ${bookTitle}`}
          className="-translate-y-2"
        >
          <LuBookA
            className="hover:scale-200 cursor-pointer"
            onClick={() => setEditMode('Title')}
          />
        </Tooltip>

        <Tooltip
          content={`Short description: ${bookDescr}`}
          className="-translate-y-2"
        >
          <GiFeather
            className="hover:scale-200 cursor-pointer"
            onClick={() => setEditMode('Description')}
          />
        </Tooltip>

        <Tooltip content="Delete book" className="-translate-y-2">
          <RiDeleteBinLine
            className="hover:scale-200 cursor-pointer"
            onClick={deleteBook}
          />
        </Tooltip>
      </div>

      {currentConfig && (
        <EditModal
          onClose={() => setEditMode(null)}
          currentVal={currentConfig.currentVal}
          onSave={(val) => {
            currentConfig.onSave(val);
            setEditMode(null);
          }}
          discardChangeLbl={currentConfig.discardChangeLbl}
          acceptChangeLbl={currentConfig.acceptChangeLbl}
          modalTitle={currentConfig.modalTitle}
          placeholder={currentConfig.placeholder}
          newValID={currentConfig.newValID}
          oldValID={currentConfig.oldValID}
          changedValue={currentConfig.changedValue}
          isMultiline={currentConfig.isMultiline}
        />
      )}
    </div>
  );
}

export default BookCard;
