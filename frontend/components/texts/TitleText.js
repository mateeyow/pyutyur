import React from 'react';

const TitleText = ({ children, className, ...rest }) => (
  <h1
    className={`text-2xl font-headers tracking-wide ${className}`}
    {...rest}
    data-testid='title text'
  >
    {children}
  </h1>
);

export default TitleText;
