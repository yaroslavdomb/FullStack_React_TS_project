import { useContext } from 'react';
import { BookContext } from '../../../context/BookContext';
import { ApiService } from '../../../services/api-service';
import { type AxiosResponse } from 'axios';
import { type Book } from '../../../models/Book';
import { filterBooks } from '../../../context/filterBooks';

export function useSidebarAction() {
  const { books, setBooks, setSearchCategory, setSearchQuery, setFilterCategory, setFilterQuery, setHiddenBookIds } =
    useContext(BookContext)!;

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
      console.log(`Update collection from server by category=${category} and query = ${query}`);
      console.table(resp.data);
      setBooks(filterBooks(resp.data, category, query));
      setSearchCategory(category);
      setSearchQuery(query);
    } else {
      processError(resp);
    }
  }

  function processSingleResponse(resp: AxiosResponse<Book>) {
    console.log('resp.status: ' + resp.status);
    if (resp.status.toString().startsWith('2')) {
      console.log(`Update collection from server by ID=${resp.data.id}`);
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
    if (books.length === 0) return;

    console.log(`Filter data on current page for category = ${category} and query = ${query}`);
    setFilterCategory(category);
    setFilterQuery(query);
  };

  const handleRestoreCollection = async () => {
    console.log('Retrieving collection from server!');
    const resp = await ApiService.getAllBooks();
    if (resp) {
      if (resp.status.toString().startsWith('2')) {
        console.table(resp.data);
        setHiddenBookIds([]);
        setBooks(resp.data);
      } else console.error('handleRestoreCollection - Error ' + resp.status);
    } else {
      console.error('handleRestoreCollection - No response from BE! Please check network settings');
    }
  };

  return {
    handleServerSearch,
    handlePageFilter,
    handleRestoreCollection,
  };
}
