import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumb = ({ children }) => {
  return (
    <div data-testid='breadcrumb'>
      {React.Children.map(children, (child) => {
        if (child?.type?.name !== 'BreadcrumbItem') {
          if (process.env !== 'production' && console?.error) {
            console.error('Breadcrumb only accepts BreadcrumbItem as children');
          }

          return null;
        }

        return child;
      })}
    </div>
  );
};

export default Breadcrumb;

export { BreadcrumbItem };
