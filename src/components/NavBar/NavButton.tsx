// import React, { useContext } from 'react';
// import { BookContext } from '../../context/BookContext';
// import { Button } from 'flowbite-react';

// function NavButton({ children }: { children: React.ReactNode }) {
//   const { books, hiddenBookIds, setAllAuthors } = useContext(BookContext)!;

//   function collectAuthors() {
//     const visibleBooks = books.filter((book) => {
//       return !hiddenBookIds.includes(book.id);
//     });
//     const authors = new Set(visibleBooks.map((book) => book.author));
//     setAllAuthors(authors);
//   }

//   function handleCollectAuthors() {
//     collectAuthors();
//   }

//   return (
//     <Button
//       className="flex flex-row bg-blue-500 hover:bg-blue-700 font-bold text-2xl w-fit"
//       onClick={handleCollectAuthors}
//     >
//       Show all authors
//     </Button>
//   );
// }

// export default NavButton;
