import { Button } from 'flowbite-react';
import { FaBookMedical } from 'react-icons/fa6';
import { BiFirstAid } from 'react-icons/bi';
import { BsDatabaseAdd } from 'react-icons/bs';
import Action from './Action';
import { useSidebarAction } from './hooks/useSidebarAction';
import { SIDEBAR_BTN_STYLE } from '../../constants/styles';

function Sidebar() {
  const { handleServerSearch, handlePageFilter, handleRestoreCollection } = useSidebarAction();

  return (
    <aside className="flex flex-col gap-4 border-4 border-amber-500 rounded-3xl pt-4 pb-4 pl-3 pr-3 min-w-76">
      <Action title="Search" buttonLbl="Search" onButtonClick={handleServerSearch} />
      <Action title="Filter" buttonLbl="" onInputChange={handlePageFilter} />
      <Button onClick={handleRestoreCollection} className={`${SIDEBAR_BTN_STYLE}`}>
        <BiFirstAid size={56} />
        Restore origin collection
      </Button>
      <Button onClick={() => {}} className={`${SIDEBAR_BTN_STYLE}`}>
        <FaBookMedical size={44} />
        Add a new book
      </Button>
      <Button onClick={() => {}} className={`${SIDEBAR_BTN_STYLE}`}>
        <BsDatabaseAdd size={56} />
        Upload your collection
      </Button>
    </aside>
  );
}

export default Sidebar;
