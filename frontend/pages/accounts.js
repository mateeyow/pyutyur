import React from 'react';
import Button from '../components/Button';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/Topbar';
import Breadcrumb, {
  BreadcrumbItem,
} from '../components/breadcrumb/Breadcrumb';
import Head from '../components/Head';

const Accounts = () => {
  return (
    <main>
      <Head title='Accounts' />
      Accounts
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
