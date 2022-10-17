import React from 'react';

const ButtonUp = () => {
  const handleMoveUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button
      id='btnUp'
      onClick={handleMoveUp}
      className='btn btn-primary material-symbols-outlined link-light'
    >
      arrow_upward
    </button>
  );
};

export default ButtonUp;
