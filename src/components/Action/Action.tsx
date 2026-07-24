import { useState } from 'react';
import DropDown from '../DropDown/DropDown';
import Search from '../Search/Search';
import ActionButton from '../ActionButton/ActionButton';

interface ActionProps {
  title: string;
  buttonLbl: string;
  onButtonClick?: (category: string, query: string) => void;
  onInputChange?: (category: string, query: string) => void;
}

function Action({
  title,
  buttonLbl,
  onButtonClick,
  onInputChange,
}: ActionProps) {
  const [category, setCategory] = useState<string>('');
  const [query, setQuery] = useState<string>('');

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setQuery('');

    if (onInputChange) {
      onInputChange(newCategory, '');
    }
  };

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
    if (onInputChange) {
      onInputChange(category, newQuery);
    }
  };

  const handleClickOnButton = () => {
    if (onButtonClick) {
      onButtonClick(category, query);
    }
  };

  return (
    <div className="flex flex-col gap-8 border-4 border-emerald-500 rounded-3xl p-3 ">
      <DropDown
        value={category}
        onChange={handleCategoryChange}
        title={title}
      />
      {category && <Search value={query} onChange={handleQueryChange} />}
      {buttonLbl && category && query.trim() && (
        <ActionButton onClick={handleClickOnButton}>{buttonLbl}</ActionButton>
      )}
    </div>
  );
}

export default Action;
