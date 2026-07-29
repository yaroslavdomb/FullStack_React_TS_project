import { useContext, useState } from 'react';
import { Tooltip } from 'flowbite-react';

import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GiFeather, GiBookCover } from 'react-icons/gi';
import { LuBaby, LuBookA } from 'react-icons/lu';
import { BiHide } from 'react-icons/bi';

import EditModal from './EditModal';
import { type EditMode } from './types';
import { STATIC_MODAL_CONFIG } from './constants';
import { type Book } from '../../models/Book';
import { BookContext } from '../../context/BookContext';
import { ApiService } from '../../services/api-service';

function BookCard({ currentBook }: { currentBook: Book }) {
  const { books, setBooks, hideBook, setSelectedCard } = useContext(BookContext)!;
  const [editMode, setEditMode] = useState<EditMode>(null);

  const handleSaveOnServer = async (updatedBook: Book) => {
    console.log(`Axios going to call to db to save updated book`);
    const resp = await ApiService.editBook(updatedBook);
    if (resp) {
      if (resp.status.toString().startsWith('2')) console.log(JSON.stringify(resp.data, null, 2));
      else console.error('handleSaveOnServer - Error ' + resp.status);
    } else {
      console.error('handleSaveOnServer - No response from BE! Please check network settings');
    }
  };

  function onBookChange(changedBook: Book) {
    const updatedBooksList: Array<Book> = books.map((currentBook: Book) => {
      return currentBook.id === changedBook.id ? changedBook : currentBook;
    });

    setBooks(updatedBooksList);
    handleSaveOnServer(changedBook);
  }

  async function deleteBook() {
    console.log('Delete the book locally');
    const filteredBooks = books.filter((book: Book) => {
      return book.id !== currentBook.id;
    });
    setBooks(filteredBooks);

    console.log('Delete the book on server');
    const response = await ApiService.deleteBook(currentBook.id);
    if (response) {
      if (response.status.toString().startsWith('2')) {
        console.log('Book deleted:');
        console.table(response.data);
      }
    } else {
      console.log('No response!');
    }
  }

  const getCurrentConfig = () => {
    if (!editMode) return null;

    const dynamicData = {
      Author: {
        currentVal: currentBook.author,
        onSave: (newValue: string) => onBookChange({ ...currentBook, author: newValue }),
      },
      Title: {
        currentVal: currentBook.title,
        onSave: (newValue: string) => onBookChange({ ...currentBook, title: newValue }),
      },
      Description: {
        currentVal: currentBook.description,
        onSave: (newValue: string) => onBookChange({ ...currentBook, description: newValue }),
      },
      Cover: {
        currentVal: currentBook.coverUrl,
        onSave: (newValue: string) => onBookChange({ ...currentBook, coverUrl: newValue }),
      },
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
      min-[400px]:w-96 min-[400px]:h-150
      min-[720px]:w-72 min-[720px]:h-150
      min-[800px]:w-96 min-[800px]:h-150 
      border-4 border-cyan-500 rounded-3xl p-5 gap-2"
      tabIndex={0}
      onClick={() => setSelectedCard(currentBook)}
    >
      {currentBook.coverUrl ? (
        <img
          className=" border-2 border-emerald-500 rounded-3xl p-5"
          alt={currentBook.title}
          src={currentBook.coverUrl}
        />
      ) : (
        <div className="w-60 h-90 md:w-80 md:h-108 border-2 border-emerald-500 rounded-3xl p-5 cover-placeholder">
          No book cover found
        </div>
      )}

      <div className="flex flex-row justify-center items-center border-2 border-fuchsia-500 rounded-3xl p-3 gap-2 hover:gap-8">
        <Tooltip content={currentBook.isFavorite ? 'Dislike this book' : 'Like this book'} className="-translate-y-2">
          <button
            onClick={() => {
              onBookChange({ ...currentBook, isFavorite: !currentBook.isFavorite });
            }}
            className="cursor-pointer hover:scale-200"
          >
            {currentBook.isFavorite ? <BsSuitHeartFill /> : <BsSuitHeart />}
          </button>
        </Tooltip>

        <Tooltip content={`Author: ${currentBook.author}`} className="-translate-y-2">
          <LuBaby className="hover:scale-200 cursor-pointer" onClick={() => setEditMode('Author')} />
        </Tooltip>

        <Tooltip content={`Book title: ${currentBook.title}`} className="-translate-y-2">
          <LuBookA className="hover:scale-200 cursor-pointer" onClick={() => setEditMode('Title')} />
        </Tooltip>

        <Tooltip content="Change the book cover" className="-translate-y-2">
          <GiBookCover className="hover:scale-200 cursor-pointer" onClick={() => setEditMode('Cover')} />
        </Tooltip>

        <Tooltip
          content={
            <div className="max-w-xs wrap-break-word max-h-80 overflow-y-auto">
              {`Short description: ${currentBook.description}`}
            </div>
          }
          className="-translate-y-2"
        >
          <GiFeather className="hover:scale-200 cursor-pointer" onClick={() => setEditMode('Description')} />
        </Tooltip>

        <Tooltip content="Hide the book" className="-translate-y-2">
          <BiHide className="hover:scale-200 cursor-pointer" onClick={() => hideBook(currentBook.id)} />
        </Tooltip>

        <Tooltip content="Delete the book" className="-translate-y-2">
          <RiDeleteBinLine className="hover:scale-200 cursor-pointer" onClick={deleteBook} />
        </Tooltip>
      </div>

      {currentConfig && (
        <EditModal
          onClose={() => setEditMode(null)}
          currentVal={currentConfig.currentVal}
          onSave={(newValue: string) => {
            currentConfig.onSave(newValue);
            setEditMode(null);
          }}
          discardChangeLbl={currentConfig.discardChangeLbl}
          acceptChangeLbl={currentConfig.acceptChangeLbl}
          modalTitle={currentConfig.modalTitle}
          placeholder={currentConfig.placeholder}
          changedValue={currentConfig.changedValue}
          isMultiline={currentConfig.isMultiline}
        />
      )}
    </div>
  );
}

export default BookCard;
