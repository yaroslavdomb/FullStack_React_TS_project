//Base code taken from https://flowbite-react.com/docs/components/dropdown

'use client';

import { Dropdown, DropdownItem } from 'flowbite-react';
import { LuBaby, LuBookOpenText, LuBookText } from 'react-icons/lu';
import { MdNumbers } from 'react-icons/md';
import { TbArrowBigDownLines } from 'react-icons/tb';
import { Button } from 'flowbite-react';
import { DROPDOWN_ITEM_STYLE } from '../../constants/styles';

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
          <Button className="bg-blue-500 hover:bg-blue-700 text-2xl w-full">
            <span className="flex items-center">
              {value || 'Categories'}
              (<TbArrowBigDownLines />)
            </span>
          </Button>
        )}
      >
        <DropdownItem icon={LuBaby} onClick={() => onChange('Author')} className={`${DROPDOWN_ITEM_STYLE}`}>
          Author
        </DropdownItem>
        <DropdownItem icon={LuBookText} onClick={() => onChange('Book Name')} className={`${DROPDOWN_ITEM_STYLE}`}>
          Book Name
        </DropdownItem>
        <DropdownItem
          icon={LuBookOpenText}
          onClick={() => onChange('Description')}
          className={`${DROPDOWN_ITEM_STYLE}`}
        >
          Description
        </DropdownItem>
        <DropdownItem icon={MdNumbers} onClick={() => onChange('Book ID')} className={`${DROPDOWN_ITEM_STYLE}`}>
          Book ID
        </DropdownItem>
      </Dropdown>
    </div>
  );
}

export default ActionDropDown;
