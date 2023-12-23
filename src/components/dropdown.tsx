import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';

interface DropdownProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  options: Record<string, string>;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, setIsOpen, options, selectedOption, setSelectedOption }) => (
  <div className='relative'>
    <button onClick={() => setIsOpen(!isOpen)} className='mr-0 flex h-full appearance-none items-center justify-end rounded-2xl border-b border-r border-t border-gray-200 bg-transparent px-4 py-2 text-gray-800'>
      <span className='font-condensed mr-4 text-base font-semibold'>{options[selectedOption]}</span>
      <span>{isOpen ? <ChevronUpIcon className='ml-2 h-5 w-5' /> : <ChevronDownIcon className='ml-2 h-5 w-5' />}</span>
    </button>

    {isOpen && (
      <ul className='absolute mt-2 w-full rounded border border-gray-200 bg-white py-1'>
        {Object.entries(options).map(([value, label]) => (
          <li
            key={value}
            className='font-condensed cursor-pointer px-3 py-1 text-base font-semibold hover:bg-gray-200'
            onClick={() => {
              setSelectedOption(value);
              setIsOpen(false);
            }}
          >
            {label}
          </li>
        ))}
      </ul>
    )}
  </div>
);
export default Dropdown;
