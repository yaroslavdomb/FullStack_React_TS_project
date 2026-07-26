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
    </aside>
  );
}

export default Sidebar;
