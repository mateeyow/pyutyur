import React from 'react';
import Link from 'next/link';
import {
  MdDashboard,
  MdAccountBalanceWallet,
  MdPowerSettingsNew,
} from 'react-icons/md';
import { FaMoneyBill } from 'react-icons/fa';
import NavItem from './NavItem';

const Sidebar = () => (
  <aside
    className='h-screen w-full border-r border-lineGray shadow bg-white relative'
    data-testid='sidebar'
  >
    <div className='h-24 flex items-center justify-center border-b border-lineGray'>
      <h1 className='font-headers text-2xl'>Pyutyur</h1>
    </div>
    <nav>
      <ul>
        <NavItem>
          <Link href='/'>
            <a className='font-semibold text-textGray text-base flex flex-row items-center py-2 px-8'>
              <MdDashboard size='32' className='text-primary' />
              <span className='pl-4'>Dashboard</span>
            </a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/expenses'>
            <a className='font-semibold text-textGray text-base flex flex-row items-center py-2 px-8'>
              <FaMoneyBill size='32' className='text-primary' />
              <span className='pl-4'>Expenses</span>
            </a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/accounts'>
            <a className='font-semibold text-textGray text-base flex flex-row items-center py-2 px-8'>
              <MdAccountBalanceWallet size='32' className='text-primary' />
              <span className='pl-4'>Accounts</span>
            </a>
          </Link>
        </NavItem>
        <NavItem className='absolute bottom-0'>
          <a className='font-semibold text-textGray text-base flex flex-row items-center py-2 px-8'>
            <MdPowerSettingsNew size='32' className='text-primary' />
            <span className='pl-4'>Log Out</span>
          </a>
        </NavItem>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
