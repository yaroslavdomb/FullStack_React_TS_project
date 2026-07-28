import { Label } from 'flowbite-react';
import { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

function SelectedBook() {
  const { selectedCard } = useContext(BookContext)!;

  return (
    <div className="flex flex-col font-bold text-2xl gap-4 border-4 border-emerald-500 rounded-3xl p-3">
      <Label className="mb-1 block">Book title: {selectedCard?.title}</Label>
      <Label className="mb-1 block">Author: {selectedCard?.author}</Label>
      <Label className="mb-1 block">Description: {selectedCard?.description}</Label>
      <Label className="mb-1 block">Book id: {selectedCard?.id}</Label>
      <Label className="mb-1 block">Liked: {selectedCard?.isFavorite ? 'Yes' : 'No'}</Label>
    </div>
  );
}

export default SelectedBook;
