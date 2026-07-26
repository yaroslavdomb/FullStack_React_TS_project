import { Button } from 'flowbite-react';
import { FaBookMedical } from 'react-icons/fa6';
import Action from './Action';

function Sidebar() {
  const handleServerSearch = (category: string, query: string) => {
    console.log('Axios call to db', category, query);
    //TODO : server calls
  };

  const handlePageFilter = (category: string, query: string) => {
    console.log('Filter data on current page', category, query);
    //TODO : local filtering
  };

  return (
    <aside className="flex flex-col gap-4 border-4 border-amber-500 rounded-3xl pt-4 pb-4 pl-3 pr-3 min-w-68">
      <Action
        title="Search"
        buttonLbl="Search"
        onButtonClick={handleServerSearch}
      />
      <Action title="Filter" buttonLbl="" onInputChange={handlePageFilter} />
      <Button
        onClick={() => {}}
        className="flex flex-row gap-2 text-2xl h-18 bg-blue-500 hover:bg-blue-700 border-4 border-blue-500  hover:border-blue-700  rounded-3xl p-8 "
      >
        <FaBookMedical />
        Add a new book
      </Button>
    </aside>
  );
}

export default Sidebar;
