import PropTypes from 'prop-types';
import { useState } from 'react';
function AccordionItem({ title, text, num, currOpen, setCurrOpen }) {
  const isOpen = currOpen === num;

  const [height, setHeight] = useState(isOpen ? 'auto' : 0);
  const [rotate, setRotate] = useState(isOpen ? 'rotate-180' : '');
  function toggleAccordion() {
    setCurrOpen(isOpen ? null : num);
    setHeight(isOpen ? 0 : 'auto');
    setRotate(isOpen ? '' : 'rotate-180');
  }

  return (
    <div>
      <div
        className={`h-2 bg-gray-200 rounded-t-md ${isOpen ? 'bg-blue-500' : ''}
      `}
      />
      <button
        className='flex justify-between w-full px-4 py-4 text-left bg-white rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
        onClick={toggleAccordion}
      >
        <span className='font-medium text-xl  text-gray-900'>{title}</span>
        <span className={`transform transition-transform ${rotate}`}>
          <svg
            className='w-6 h-6 text-blue-500'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </span>
      </button>
      <div
        className='overflow-hidden transition-all duration-500'
        style={{ height }}
      >
        {isOpen && <p className='px-4 py-2 text-gray-500'>{text}</p>}
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  currOpen: PropTypes.number,
  setCurrOpen: PropTypes.func.isRequired,
};
export default AccordionItem;
