import React from 'react';
import DatePicker from 'react-datepicker';
import Link from 'next/link';
import Head from '../../components/Head';
import TitleText from '../../components/texts/TitleText';
import Button from '../../components/Button';
import 'react-datepicker/dist/react-datepicker.css';

const NewAccount = () => {
  return (
    <>
      <Head title='New Account' />
      <div className='flex items-center'>
        <TitleText>Create New Account</TitleText>
        <div className='ml-auto'>
          <Link href='/accounts'>
            <a className='uppercase underline text-anchor mr-4 text-sm'>
              Cancel
            </a>
          </Link>
          <Button>Save</Button>
        </div>
      </div>
      <div>
        <div className='mt-10'>
          <span>Account Type</span>
          <div className='mt-2'>
            <label className='inline-flex items-center'>
              <input
                type='radio'
                className='form-radio text-primary'
                name='accountType'
                value='debit'
              />
              <span className='ml-2'>Debit</span>
            </label>
            <label className='inline-flex items-center ml-6'>
              <input
                type='radio'
                className='form-radio text-primary'
                name='accountType'
                value='credit'
              />
              <span className='ml-2'>Credit</span>
            </label>
          </div>
        </div>
        <label className='block mt-6'>
          <span>Name</span>
          <input
            type='text'
            className='form-input mt-1 block w-full'
            placeholder='Main Wallet'
          />
        </label>
        <label className='block mt-6'>
          <span>Amount</span>
          <input
            type='text'
            className='form-input mt-1 block w-full'
            placeholder='2500'
          />
        </label>
        <label className='block mt-6'>
          <span className='block'>Due Date</span>
          <DatePicker
            className='form-input block mt-1 w-full'
            wrapperClassName='w-full'
            calendarClassName='bg-primary'
          />
        </label>
      </div>
    </>
  );
};

NewAccount.title = 'New Account';
NewAccount.breadcrumbs = [
  {
    title: 'Dashboard',
    href: '/',
  },
  {
    title: 'Accounts Management',
    href: '/accounts',
  },
  {
    title: 'New Account',
  },
];

export default NewAccount;
