import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      data-testid='button'
      className='uppercase bg-primary text-white p-2 font-semibold tracking-wider rounded shadow hover:bg-primaryHover text-sm'
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
