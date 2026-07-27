// Basic code taken fromhttps://flowbite-react.com/docs/components/forms#form-helper-text

import { Label, TextInput } from 'flowbite-react';
import { useId } from 'react';

interface ActionSearchProps {
  value: string;
  onChange: (search: string) => void;
}

function ActionSearch({ value, onChange }: ActionSearchProps) {
  const inputId = useId();

  return (
    <div className="flex max-w-md flex-col gap-4">
      <Label htmlFor={inputId} color="gray" className="mb-2 block font-bold! text-2xl!">
        Search for:
      </Label>
      <TextInput
        id={inputId}
        placeholder="Search line"
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 text-2xl! italic! text-gray-300!"
      />
    </div>
  );
}

export default ActionSearch;
