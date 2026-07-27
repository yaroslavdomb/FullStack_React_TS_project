// Basic code taken fromhttps://flowbite-react.com/docs/components/forms#form-helper-text

import { Label, TextInput } from 'flowbite-react';

interface ActionSearchProps {
  value: string;
  onChange: (search: string) => void;
}

function ActionSearch({ value, onChange }: ActionSearchProps) {
  return (
    <div id="Search" className="flex max-w-md flex-col gap-4">
      <div>
        <Label color="gray" className="mb-2 block font-bold! text-2xl!">
          Search for:
          <TextInput
            placeholder="Search line"
            required
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="mt-2 text-2xl! italic! text-gray-300!"
          />
        </Label>
      </div>
    </div>
  );
}

export default ActionSearch;
