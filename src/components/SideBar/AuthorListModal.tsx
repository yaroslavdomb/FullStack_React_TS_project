import { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Modal, ModalBody, ModalHeader } from 'flowbite-react';

interface AuthorListModalProps {
  onClose: () => void;
  isOpen: boolean;
}

export function AuthorListModal({ isOpen, onClose }: AuthorListModalProps) {
  const { allAuthors } = useContext(BookContext)!;

  return (
    <>
      <Modal show={isOpen} size="md" onClose={onClose} dismissible popup>
        <ModalHeader> Authors </ModalHeader>
        <ModalBody>
          <ul className="flex flex-col gap-2 border-4 border-emerald-500 rounded-3xl p-3">
            {Array.from(allAuthors).map((author) => {
              return <li key={author}>{author}</li>;
            })}
          </ul>
        </ModalBody>
      </Modal>
    </>
  );
}
