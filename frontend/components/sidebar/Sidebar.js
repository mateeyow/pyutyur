import React from 'react';
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
        <NavItem icon={MdDashboard} text='Dashboard' url='/' />
        <NavItem icon={FaMoneyBill} text='Expenses' url='/expenses' />
        <NavItem
          icon={MdAccountBalanceWallet}
          text='Accounts'
          url='/accounts'
        />
        <NavItem icon={MdPowerSettingsNew} text='Log Out' url='/logout' />
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
