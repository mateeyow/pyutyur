import React from 'react';
import { render } from '@testing-library/react';
import BreadcrumbItem from '../BreadcrumbItem';

describe('#BreadcrumbItem', () => {
  it('should render the component', () => {
    const { getByTestId } = render(<BreadcrumbItem>Test</BreadcrumbItem>);

    expect(getByTestId('breadcrumb item')).toBeInTheDocument();
  });

  it('should render a link with a separator if href is in props', () => {
    const { getByTestId } = render(
      <BreadcrumbItem href='/dashboard'>Dashboard</BreadcrumbItem>
    );

    expect(getByTestId('breadcrumb item')).toHaveTextContent('/');
    expect(getByTestId('breadcrumb item')).toContainElement(
      getByTestId('breadcrumb link')
    );
  });
});
