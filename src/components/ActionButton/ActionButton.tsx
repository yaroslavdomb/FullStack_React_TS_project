import { Button } from 'flowbite-react';
import { IoSearch } from 'react-icons/io5';

interface actionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function ActionButton({ onClick, children }: actionButtonProps) {
  return (
    <div className="flex flex-row ">
      <Button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-2xl"
      >
        <IoSearch className="mr-2 h-5 w-5" />
        {children}
      </Button>
    </div>
  );
}

export default ActionButton;
