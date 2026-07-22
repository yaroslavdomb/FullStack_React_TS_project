import { useState } from 'react';

function SearchSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCriteria, setSelectedCriteria] = useState('Search by...');

  const handleSelect = (criteria: string) => {
    setSelectedCriteria(criteria);
    setIsOpen(false);
  };

  return (
    <form className="max-w-2xl mx-auto">
      <div className="flex shadow-xs rounded-base -space-x-0.5 relative">
        <label
          htmlFor="search-dropdown"
          className="block mb-2.5 text-sm font-bold text-heading sr-only"
        >
          Search filter criteria
        </label>
        <button
          id="dropdown-button"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center shrink-0 z-10 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-2 focus:ring-neutral-tertiary  leading-5 rounded-s-base px-4 py-2.5 focus:outline-none font-bold text-2xl"
        >
          {selectedCriteria}
          <svg
            className="w-4 h-4 ms-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>

        <div
          id="dropdown"
          className={`z-10 ${isOpen ? '' : 'hidden'} absolute top-full left-0 mt-1 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44`}
        >
          <ul
            className="text-body font-bold text-2xl"
            aria-labelledby="dropdown-button"
          >
            <li className="pl-1.5 pb-1 block w-full text-left hover:bg-blue-400 hover:text-heading">
              <button type="button" onClick={() => handleSelect('Author')}>
                Author
              </button>
            </li>
            <li className="pl-1.5 pb-1 block w-full text-left hover:bg-blue-400 hover:text-heading">
              <button type="button" onClick={() => handleSelect('Book name')}>
                Book name
              </button>
            </li>
            <li className="pl-1.5 pb-1 block w-full text-left hover:bg-blue-400 hover:text-heading">
              <button type="button" onClick={() => handleSelect('Description')}>
                Description
              </button>
            </li>
          </ul>
        </div>

        <input
          type="search"
          id="search-dropdown"
          className="bg-neutral-secondary-medium border border-default-medium text-heading focus:ring-neutral-tertiary  leading-5 rounded-s-base px-4 py-2.5 focus:outline-none text-2xlfocus:border-brand focus:ring-2 block w-full placeholder:text-body font-bold text-2xl"
          placeholder="Search for products"
          required
        />

        <button
          type="button"
          className="inline-flex items-center shrink-0 text-white bg-blue-600 hover:bg-blue-700 box-border border border-transparent focus:ring-4 focus:ring-black shadow-xs leading-5 rounded-e-base px-4 py-2.5 focus:outline-none font-bold text-2xl"
        >
          <svg
            className="w-8 h-8 me-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
          Search
        </button>
      </div>
    </form>
  );
}
export default SearchSection;
