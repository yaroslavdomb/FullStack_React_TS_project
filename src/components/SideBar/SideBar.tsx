import { useContext, useState } from 'react';
import { Button } from 'flowbite-react';

import Action from './Action';
import { useSidebarAction } from './hooks/useSidebarAction';
import { SIDEBAR_BTN_STYLE } from '../../constants/styles';
import AddBookModal from './AddBookModal';
import { BookContext } from '../../context/BookContext';
import SelectedBook from './SelectedBook';
import { AuthorListModal } from './AuthorListModal';

import { FaListUl } from 'react-icons/fa6';
import { MdSettingsBackupRestore } from 'react-icons/md';
import { FaBookMedical } from 'react-icons/fa';

function Sidebar() {
  const { handleServerSearch, handlePageFilter, handleRestoreCollection, collectAllAuthors } = useSidebarAction();
  const [openAddBookModal, setOpenAddBookModal] = useState<boolean>(false);
  const [openAllAuthorsModal, setOpenAllAuthorsModal] = useState<boolean>(false);
  const {
    selectedCard,
    searchCategory,
    setSearchCategory,
    searchQuery,
    setSearchQuery,
    filterCategory,
    setFilterCategory,
    filterQuery,
    setFilterQuery,
  } = useContext(BookContext)!;

  const handleOpenAddBookModal = () => setOpenAddBookModal(true);
  const handleCloseAddBookModal = () => setOpenAddBookModal(false);
  function handleOpenAllAuthorsModal() {
    collectAllAuthors();
    setOpenAllAuthorsModal(true);
  }
  const handleCloseAllAuthorsModal = () => setOpenAllAuthorsModal(false);

  return (
    <aside className="flex flex-col gap-4 border-4 border-amber-500 rounded-3xl pt-4 pb-4 pl-3 pr-3 min-w-76 max-w-96 min-[720px]:sticky min-[720px]:top-4 min-[720px]:self-start h-fit">
      <Action
        title="Search"
        buttonLbl="Search"
        onButtonClick={handleServerSearch}
        category={searchCategory}
        setCategory={setSearchCategory}
        query={searchQuery}
        setQuery={setSearchQuery}
      />
      <Action
        title="Filter"
        buttonLbl=""
        onInputChange={handlePageFilter}
        category={filterCategory}
        setCategory={setFilterCategory}
        query={filterQuery}
        setQuery={setFilterQuery}
      />
      <Button onClick={handleRestoreCollection} className={`${SIDEBAR_BTN_STYLE}`}>
        <MdSettingsBackupRestore size={56} />
        Restore origin collection
      </Button>
      <Button onClick={handleOpenAddBookModal} className={`${SIDEBAR_BTN_STYLE}`}>
        <FaBookMedical size={44} />
        Add a new book
      </Button>
      <Button onClick={handleOpenAllAuthorsModal} className={`${SIDEBAR_BTN_STYLE}`}>
        <FaListUl size={44} />
        Show all authors
      </Button>

      {openAddBookModal && <AddBookModal onClose={handleCloseAddBookModal} />}
      {openAllAuthorsModal && <AuthorListModal isOpen={openAllAuthorsModal} onClose={handleCloseAllAuthorsModal} />}
      {selectedCard && <SelectedBook />}
    </aside>
  );
}

export default Sidebar;
