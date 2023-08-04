import PropTypes from 'prop-types';
import { useState } from 'react';
import AccordionItem from './AccordionItem';
function Accordion({ faqs }) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className='grid gap-4'>
      {faqs.map((faq, i) => {
        return (
          <AccordionItem
            key={i}
            title={faq.question}
            text={faq.answer}
            num={i}
            currOpen={currOpen}
            setCurrOpen={setCurrOpen}
          />
        );
      })}
    </div>
  );
}

Accordion.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Accordion;
