import React from 'react';
import Head from '../components/Head';
import TitleText from '../components/texts/TitleText';
import Button from '../components/Button';
import ListBox from '../components/ListBox';

const Accounts = () => {
  const data = [
    {
      id: 1,
      type: 'Credit',
      balance: 5000,
      dueDate: new Date('2020-03-05'),
      name: 'Main Balance',
      currency: 'SGD',
    },
    {
      id: 2,
      type: 'Debit',
      balance: 3500,
      name: 'Cash Wallet',
      currency: 'SGD',
    },
    {
      id: 3,
      type: 'Credit',
      balance: 836.36,
      name: 'SMRT Credit',
      dueDate: new Date('2020-03-28'),
      currency: 'SGD',
    },
  ];

  return (
    <main>
      <Head title='Accounts' />
      <div className='flex'>
        <TitleText>Accounts</TitleText>
        <Button className='ml-auto' href='/accounts/new'>
          Create new account
        </Button>
      </div>
      <div className='mt-8'>
        <ul>
          {data.map((item) => (
            <ListBox data={item} key={item.id} />
          ))}
        </ul>
      </div>
    </main>
  );
};

Accounts.title = 'Accounts Management';
Accounts.breadcrumbs = [
  {
    title: 'Dashboard',
    href: '/',
  },
  {
    title: 'Accounts Management',
  },
];

export default Accounts;
