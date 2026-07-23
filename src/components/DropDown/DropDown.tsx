//Base code taken from https://flowbite-react.com/docs/components/dropdown

'use client';

import { Dropdown, DropdownItem, Label } from 'flowbite-react';
import { LuBaby, LuBookOpenText, LuBookText } from 'react-icons/lu';

interface DropDownProps {
  value: string;
  onChange: (category: string) => void;
}

function DropDown({ value, onChange }: DropDownProps) {
  return (
    <div className="font-bold text-4xl">
      <Label
        htmlFor="search-category-dropdown"
        className="mb-2 block font-bold text-2xl"
      >
        Search by:
      </Label>
      <Dropdown
        id="search-category-dropdown"
        label={value || 'Select by ...'}
        className=" bg-blue-500 hover:bg-blue-700 hover:text-white font-bold text-xl"
      >
        <DropdownItem
          icon={LuBaby}
          onClick={() => onChange('Author')}
          className="hover:bg-blue-700 hover:text-white font-bold text-xl"
        >
          Author
        </DropdownItem>
        <DropdownItem
          icon={LuBookText}
          onClick={() => onChange('Book Name')}
          className="hover:bg-blue-700 hover:text-white font-bold text-xl"
        >
          Book Name
        </DropdownItem>
        <DropdownItem
          icon={LuBookOpenText}
          onClick={() => onChange('Description')}
          className="hover:bg-blue-700 hover:text-white font-bold text-xl"
        >
          Description
        </DropdownItem>
      </Dropdown>
    </div>
  );
}

export default DropDown;
