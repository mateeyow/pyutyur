import React, { useContext } from 'react';
import Button from './Button';
import TitleText from './texts/TitleText';
import { ExpenseContext } from './modal/CreateExpenses';

const Topbar = ({ title, children }) => {
  const modalContext = useContext(ExpenseContext);

  return (
    <header
      className='h-24 bg-white border-r border-lineGray shadow py-6 px-10 flex items-center'
      data-testid='topbar'
    >
      <div>
        <TitleText>{title}</TitleText>
        {children}
      </div>
      <div className='ml-auto'>
        <Button onClick={() => modalContext.setIsExpenseOpen(true)}>
          Add new expense
        </Button>
      </div>
    </header>
  );
};

export default Topbar;
