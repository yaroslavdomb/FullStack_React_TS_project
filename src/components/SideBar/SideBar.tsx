import { Button } from 'flowbite-react';
import { FaBookMedical } from 'react-icons/fa6';
import { BiFirstAid } from 'react-icons/bi';
import { BsDatabaseAdd } from 'react-icons/bs';
import Action from './Action';
import { ApiService } from '../../services/api-service';
import { type Book } from '../../models/Book';
import { type AxiosResponse } from 'axios';
import { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { categoryMapper } from '../BookCard/types';

function Sidebar() {
  const { books, setBooks } = useContext(BookContext)!;

  function filterBooks(booksList: Array<Book>, category: string, query: string) {
    const key = categoryMapper[category] as keyof Book;
    const filteredBooks = booksList.filter((currentBook) => {
      return currentBook[key].toString().includes(query);
    });

    console.log(JSON.stringify(filteredBooks, null, 2));
    return filteredBooks;
  }

  function processError(resp: AxiosResponse<Array<Book>>) {
    console.error('Some error occur:' + resp.status);
    //TODO: add some reall error processing
  }

  function processSingleError(resp: AxiosResponse<Book>) {
    console.error('Some error occur:' + resp.status);
    //TODO: add some reall error processing
  }

  function processResponse(resp: AxiosResponse<Array<Book>>, category: string, query: string) {
    console.log('resp.status: ' + resp.status);
    if (resp.status.toString().startsWith('2')) {
      console.table(resp.data);
      const newBookList = filterBooks(resp.data, category, query);
      setBooks(newBookList);
    } else {
      processError(resp);
    }
  }

  function processSingleResponse(resp: AxiosResponse<Book>) {
    console.log('resp.status: ' + resp.status);
    if (resp.status.toString().startsWith('2')) {
      console.table(resp.data);
      setBooks([resp.data]);
    } else {
      processSingleError(resp);
    }
  }

  const handleServerSearch = async (category: string, query: string) => {
    if (category === 'Book ID') {
      console.log(`Axios going to call to DB to extract single book`);
      const resp = await ApiService.getBookById(query.trim());
      if (resp) {
        if (resp.status.toString().startsWith('2')) processSingleResponse(resp);
        else console.error('handleServerSearch - Single - Error ' + resp.status);
      } else {
        console.error('handleServerSearch - No response from BE! Please check network settings');
      }
    } else {
      console.log(`Axios going to call to DB to extract all the data`);
      const resp = await ApiService.getAllBooks();
      if (resp) {
        if (resp.status.toString().startsWith('2')) processResponse(resp, category, query);
        else console.error('handleServerSearch - Batch - Error ' + resp.status);
      } else {
        console.error('handleServerSearch - No response from BE! Please check network settings');
      }
    }
  };

  const handlePageFilter = async (category: string, query: string) => {
    if (!category || !query || books.length === 0) return;

    console.log(`Filter data on current page for category = ${category} and query = ${query}`);
    const filteredBooks = filterBooks(books, category, query);
    setBooks(filteredBooks);
  };

  const handleRestoreCollection = async () => {
    const resp = await ApiService.getAllBooks();
    if (resp) {
      if (resp.status.toString().startsWith('2')) setBooks(resp.data);
      else console.error('handleRestoreCollection - Error ' + resp.status);
    } else {
      console.error('handleRestoreCollection - No response from BE! Please check network settings');
    }
  };

  return (
    <aside className="flex flex-col gap-4 border-4 border-amber-500 rounded-3xl pt-4 pb-4 pl-3 pr-3 min-w-76">
      <Action title="Search" buttonLbl="Search" onButtonClick={handleServerSearch} />
      <Action title="Filter" buttonLbl="" onInputChange={handlePageFilter} />
      <Button
        onClick={() => {}}
        className="flex flex-row gap-2 text-2xl h-18 bg-blue-500 hover:bg-blue-700 border-4 border-blue-500  hover:border-blue-700 rounded-3xl p-8 "
      >
        <FaBookMedical size={44} />
        Add a new book
      </Button>
      <Button
        onClick={handleRestoreCollection}
        className="flex flex-row gap-2 text-2xl h-24 bg-blue-500 hover:bg-blue-700 border-4 border-blue-500  hover:border-blue-700 rounded-3xl p-8 "
      >
        <BiFirstAid size={56} />
        Restore origin collection
      </Button>
      <Button
        onClick={() => {}}
        className="flex flex-row gap-2 text-2xl h-24 bg-blue-500 hover:bg-blue-700 border-4 border-blue-500  hover:border-blue-700 rounded-3xl p-8 "
      >
        <BsDatabaseAdd size={56} />
        Upload your collection
      </Button>
    </aside>
  );
}

export default Sidebar;
