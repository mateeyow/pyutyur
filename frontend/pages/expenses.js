import React from 'react';
import Head from '../components/Head';

const Exepnses = () => {
  return (
    <div>
      <Head title='Expenses' />
      Expenses
    </div>
  );
};

Exepnses.title = 'Expenses';
Exepnses.breadcrumbs = [
  {
    title: 'Dashboard',
    href: '/',
  },
  {
    title: 'Expenses',
  },
];

export default Exepnses;
