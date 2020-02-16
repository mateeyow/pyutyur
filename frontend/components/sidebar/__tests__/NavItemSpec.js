import React from 'react';
import { render } from '@testing-library/react';
import NavItem from '../NavItem';

describe('#NavItemSpec', () => {
  it('should render the NavItem component', () => {
    const { getByTestId, getByText } = render(
      <NavItem>This is a nav item</NavItem>
    );

    expect(getByTestId('nav item')).toBeInTheDocument();
    expect(getByText('This is a nav item')).toBeInTheDocument();
  });

  it('should inherit the class attribute when passed as props', () => {
    const { getByTestId } = render(
      <NavItem className='sample-class'>With a class</NavItem>
    );

    expect(getByTestId('nav item')).toHaveClass('sample-class');
  });
});
