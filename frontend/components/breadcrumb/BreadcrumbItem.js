import React from 'react';
import Link from 'next/link';

const BreadcrumbItem = ({ children, href }) => {
  if (href) {
    return (
      <span className='text-sm font-light' data-testid='breadcrumb item'>
        <span className='underline text-anchor'>
          <Link href={href}>
            <a data-testid='breadcrumb link'>{children}</a>
          </Link>
        </span>{' '}
        /{' '}
      </span>
    );
  }
  return (
    <span className='text-sm font-light' data-testid='breadcrumb item'>
      {children}
    </span>
  );
};

export default BreadcrumbItem;
