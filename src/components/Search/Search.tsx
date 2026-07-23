// Basic code taken fromhttps://flowbite-react.com/docs/components/forms#form-helper-text

import { Label, TextInput } from 'flowbite-react';

interface SearchProps {
  value: string;
  onChange: (search: string) => void;
}

function Search({ value, onChange }: SearchProps) {
  return (
    <div id="Search" className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block font-bold text-2xl">
          <Label
            htmlFor="search-line"
            color="gray"
            className="font-bold text-2xl"
          >
            Search for:
          </Label>
        </div>
        <TextInput
          id="search-line"
          placeholder="Search line"
          required
          color="gray"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="font-bold text-2xl"
        />
      </div>
    </div>
  );
}

export default Search;
