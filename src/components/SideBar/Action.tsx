import ActionDropDown from './ActionDropDown';
import ActionSearch from './ActionSearch';
import ActionButton from './ActionButton';
import { Button } from 'flowbite-react';

interface ActionProps {
  title: string;
  buttonLbl: string;
  category: string;
  setCategory: (category: string) => void;
  query: string;
  setQuery: (query: string) => void;
  onButtonClick?: (category: string, query: string) => void;
  onInputChange?: (category: string, query: string) => void;
}

function Action({ title, buttonLbl, category, setCategory, query, setQuery, onButtonClick }: ActionProps) {
  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setQuery('');
  };

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery.trim());
  };

  const handleClickOnButton = () => {
    if (onButtonClick) {
      onButtonClick(category, query.trim());
    }
  };

  const handleClearForm = () => {
    setCategory('');
    setQuery('');
  };

  return (
    <div className="flex flex-col gap-8 border-4 border-emerald-500 rounded-3xl p-3 ">
      <ActionDropDown value={category} onChange={handleCategoryChange} title={title} />
      {category && <ActionSearch value={query} onChange={handleQueryChange} />}
      {buttonLbl && category && query.trim() && <ActionButton onClick={handleClickOnButton}>{buttonLbl}</ActionButton>}
      {(category || query.trim()) && (
        <Button onClick={handleClearForm} className="bg-blue-500 hover:bg-blue-700 text-2xl text-white">
          Clear form
        </Button>
      )}
    </div>
  );
}

export default Action;
