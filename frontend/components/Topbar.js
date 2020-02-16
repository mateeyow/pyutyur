import React from 'react';
import Button from './Button';

const Topbar = ({ title, children }) => (
  <header
    className='h-24 bg-white border-r border-lineGray shadow py-6 px-10 flex items-center'
    data-testid='topbar'
  >
    <div>
      <h1 className='text-2xl font-headers tracking-wide'>{title}</h1>
      {children}
    </div>
    <div className='ml-auto'>
      <Button>Add new expense</Button>
    </div>
  </header>
);

export default Topbar;
