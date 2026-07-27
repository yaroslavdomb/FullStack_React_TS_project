//Base code taken from https://flowbite-react.com/docs/components/dropdown

'use client';

import { Dropdown, DropdownItem, Label } from 'flowbite-react';
import { LuBaby, LuBookOpenText, LuBookText } from 'react-icons/lu';
import { TbArrowBigDownLines } from 'react-icons/tb';
import { Button } from 'flowbite-react';

interface ActionDropDownProps {
  title: string;
  value: string;
  onChange: (category: string) => void;
}

function ActionDropDown({ title, value, onChange }: ActionDropDownProps) {
  return (
    <div className="font-bold text-4xl">
      <span className="mb-2 block font-bold text-2xl">{title} by:</span>
      <Dropdown
        renderTrigger={() => (
          <Button className="bg-blue-500 hover:bg-blue-700 text-2xl">
            <span className="flex items-center">
              {value || 'Categories'}
              (<TbArrowBigDownLines />)
            </span>
          </Button>
        )}
      >
        <DropdownItem
          icon={LuBaby}
          onClick={() => onChange('Author')}
          className="hover:bg-blue-700! hover:text-white font-bold text-xl"
        >
          Author
        </DropdownItem>
        <DropdownItem
          icon={LuBookText}
          onClick={() => onChange('Book Name')}
          className="hover:bg-blue-700! hover:text-white font-bold text-xl"
        >
          Book Name
        </DropdownItem>
        <DropdownItem
          icon={LuBookOpenText}
          onClick={() => onChange('Description')}
          className="hover:bg-blue-700! hover:text-white font-bold text-xl"
        >
          Description
        </DropdownItem>
      </Dropdown>
    </div>
  );
}

export default ActionDropDown;
