import React from 'react';
import Link from 'next/link';

const Button = ({ children, className = '', href, ...props }) => {
  const cx = `uppercase bg-primary text-white p-2 font-semibold tracking-wider rounded shadow hover:bg-primaryHover text-sm ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <a className={cx}>{children}</a>
      </Link>
    );
  }

  return (
    <button data-testid='button' className={cx} {...props}>
      {children}
    </button>
  );
};

export default Button;
