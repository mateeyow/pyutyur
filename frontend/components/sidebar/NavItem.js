import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem = ({ className, icon: Icon, url, text, ...rest }) => {
  const router = useRouter();
  const isActive = router.pathname === url;
  const defaultClassName = `${
    isActive ? 'border-primary' : 'border-transparent'
  } border-l-4 hover:border-primary cursor-pointer`;
  const mergedClassName = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;

  return (
    <li {...rest} className={mergedClassName} data-testid='nav item'>
      <Link href={url}>
        <a className='font-semibold text-textGray text-base flex flex-row items-center py-2 px-8'>
          {Icon && <Icon size='32' className='text-primary' />}
          <span className='pl-4'>{text}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
