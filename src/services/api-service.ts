import axios from 'axios';
import type { Book } from '../models/Book';

const _axios = axios.create({
  baseURL: 'https://6a65fa9f06b3848d4b86f4bc.mockapi.io/api/v1/',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

export const ApiService = {
  getAllBooks: () => _axios.get<Array<Book>>(`books`),
  getBookById: (id: string) => _axios.get<Book>(`books/${id}`),
  addNewBook: (newBook: Book) => _axios.post<Book>(`books`, newBook),
  deleteBook: (id: string) => _axios.delete<Book>(`books/${id}`),
  editBook: (editedBook: Book) => _axios.put<Book>(`books/${editedBook.id}`, editedBook),
};
