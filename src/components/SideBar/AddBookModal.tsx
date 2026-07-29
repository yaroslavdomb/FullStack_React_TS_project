import { Button, Label, Modal, ModalBody, ModalHeader, TextInput, Textarea } from 'flowbite-react';
import { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import type { Book } from '../../models/Book';
import { ApiService } from '../../services/api-service';
import type { AxiosResponse } from 'axios';

interface AddBookModalProps {
  onClose: () => void;
}

function AddBookModal({ onClose }: AddBookModalProps) {
  const [tempTitle, setTempTitle] = useState<string>('');
  const [tempAuthorName, setTempAuthorName] = useState<string>('');
  const [tempDescription, setTempDescription] = useState<string>('');
  const [tempCoverAddress, setTempCoverAddress] = useState<string>('');

  const { books, setBooks } = useContext(BookContext)!;

  function generateID(): string {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }

    return URL.createObjectURL(new Blob([])).slice(-36);
  }

  /*
  Using special function to generate UUID as in regular function we can't use useID hook
  */
  const handleSaveNewBook = async () => {
    const newBook: Book = {
      title: tempTitle.trim(),
      author: tempAuthorName.trim(),
      description: tempDescription.trim(),
      coverImage: tempCoverAddress.trim(),
      isFavorite: false,
      id: generateID(),
    };

    console.log('Adding the new book localy!');
    console.table(newBook);
    setBooks([...books, newBook]);

    console.log('Adding the new book to server!');
    const resp: AxiosResponse = await ApiService.addNewBook(newBook);
    if (resp) {
      if (resp.status.toString().startsWith('2')) console.table(resp.data);
      else console.error('Error on addNewBook:' + resp.status);
    } else console.error('No response - check network connectivity!');

    onClose();
  };

  return (
    <>
      <Modal show={true} size="md" onClose={onClose} popup>
        <ModalHeader> Add new book </ModalHeader>
        <ModalBody className="flex flex-col gap-4">
          <div>
            <Label htmlFor="book-title-id">
              <span className="mb-2 block">Book title:</span>
              <TextInput
                id="book-title-id"
                required
                value={tempTitle}
                placeholder="Title"
                onChange={(e) => setTempTitle(e.target.value)}
              />
            </Label>
          </div>
          <div>
            <Label htmlFor="author-name-id">
              <span className="mb-2 block">Author name:</span>
              <TextInput
                id="author-name-id"
                required
                value={tempAuthorName}
                placeholder="Name"
                onChange={(e) => setTempAuthorName(e.target.value)}
              />
            </Label>
          </div>
          <div>
            <Label htmlFor="book-description-id">
              <span className="mb-2 block">Book Description:</span>
              <Textarea
                id="book-description-id"
                required
                value={tempDescription}
                placeholder="Description"
                rows={6}
                onChange={(e) => setTempDescription(e.target.value)}
              />
            </Label>
          </div>
          <div>
            <Label htmlFor="cover-id">
              <span className="mb-2 block">Cover Url(optional):</span>
              <TextInput
                id="cover-id"
                type="url"
                value={tempCoverAddress}
                placeholder="Cover Url"
                onChange={(e) => setTempCoverAddress(e.target.value)}
              />
            </Label>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            {tempTitle.trim() && tempAuthorName.trim() && tempDescription.trim() && (
              <Button onClick={handleSaveNewBook} className="w-fit bg-blue-500 text-white hover:bg-blue-700">
                Save
              </Button>
            )}
            <Button onClick={onClose} className="w-fit bg-blue-500 text-white hover:bg-blue-700">
              Discard & close
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default AddBookModal;
