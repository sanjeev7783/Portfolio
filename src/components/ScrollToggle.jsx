import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToggle = () => {
  const [atTop, setAtTop] = useState(false);

  const handleToggleScroll = () => {
    if (atTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setAtTop(!atTop);
  };

  return (
    <button
      onClick={handleToggleScroll}
      title={atTop ? 'Scroll to Bottom' : 'Scroll to Top'}
      className={`fixed bottom-6 right-6 p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-transform duration-300 z-50 ${
        atTop ? 'rotate-180' : ''
      }`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToggle;
