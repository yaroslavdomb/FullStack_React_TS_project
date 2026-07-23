import { useState } from 'react';
import DropDown from '../DropDown/DropDown';
import Search from '../Search/Search';
import SearchButton from '../SearchButton/SearchButton';

function SearchSection() {
  const [searchCategory, setSearchCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    //TODO: implement search
  };

  return (
    <div className="flex flex-col gap-8">
      <DropDown
        value={searchCategory}
        onChange={(newCategory) => {
          setSearchCategory(newCategory);
          setSearchQuery('');
        }}
      />
      {searchCategory && (
        <Search value={searchQuery} onChange={setSearchQuery} />
      )}
      {searchCategory && searchQuery.trim() && (
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      )}
    </div>
  );
}

export default SearchSection;
