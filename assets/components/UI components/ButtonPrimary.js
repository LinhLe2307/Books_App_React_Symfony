import React from "react";

const ButtonPrimary = ({ click, children }) => {
  return (
    <button className='btn btn-primary' onClick={click}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
