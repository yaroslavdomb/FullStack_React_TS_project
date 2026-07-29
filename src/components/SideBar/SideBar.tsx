import { Button } from 'flowbite-react';
import { FaBookMedical } from 'react-icons/fa6';
import { BiFirstAid } from 'react-icons/bi';
import Action from './Action';
import { useSidebarAction } from './hooks/useSidebarAction';
import { SIDEBAR_BTN_STYLE } from '../../constants/styles';
import { useContext, useState } from 'react';
import AddBookModal from './AddBookModal';
import { BookContext } from '../../context/BookContext';
import SelectedBook from './SelectedBook';

function Sidebar() {
  const { handleServerSearch, handlePageFilter, handleRestoreCollection } = useSidebarAction();
  const [openAddBookModal, setOpenAddBookModal] = useState<boolean>(false);
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

  const handleOpenModal = () => setOpenAddBookModal(true);
  const handleCloseModal = () => setOpenAddBookModal(false);

  return (
    <aside className="flex flex-col gap-4 border-4 border-amber-500 rounded-3xl pt-4 pb-4 pl-3 pr-3 min-w-76 min-[720px]:sticky min-[720px]:top-4 min-[720px]:self-start h-fit">
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
        <BiFirstAid size={56} />
        Restore origin collection
      </Button>
      <Button onClick={handleOpenModal} className={`${SIDEBAR_BTN_STYLE}`}>
        <FaBookMedical size={44} />
        Add a new book
      </Button>
      {openAddBookModal && <AddBookModal onClose={handleCloseModal} />}
      {selectedCard && <SelectedBook />}
    </aside>
  );
}

export default Sidebar;
