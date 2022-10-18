import React from "react";

const ButtonSecondary = ({ click, children }) => {
  return (
    <button className='btn btn-secondary' onClick={click}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
