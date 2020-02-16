import React from 'react';

const NavItem = ({ children, className, ...rest }) => {
  const defaultClassName =
    'border-transparent border-l-4 hover:border-primary cursor-pointer';
  const mergedClassName = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;

  return (
    <li {...rest} className={mergedClassName} data-testid='nav item'>
      {children}
    </li>
  );
};

export default NavItem;
