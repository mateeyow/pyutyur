import React from 'react';
import { render } from '@testing-library/react';
import NavItem from '../NavItem';

describe('#NavItemSpec', () => {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');

  beforeEach(() => {
    useRouter.mockImplementationOnce(() => ({
      pathname: '/',
    }));
  });

  afterEach(() => {
    useRouter.mockReset();
  });

  afterAll(() => {
    useRouter.mockRestore();
  });

  it('should render the NavItem component', () => {
    const { getByTestId, getByText } = render(
      <NavItem text='This is a nav item' url='/test' />
    );

    expect(getByTestId('nav item')).toBeInTheDocument();
    expect(getByText('This is a nav item')).toBeInTheDocument();
    expect(getByTestId('nav item')).not.toHaveClass('border-primary');
  });

  it('should inherit the class attribute when passed as props', () => {
    const { getByTestId } = render(
      <NavItem className='sample-class' url='/' text='With class' />
    );

    expect(getByTestId('nav item')).toHaveClass('sample-class');
  });

  it('should have border-primary class when pathname is equal to the url', () => {
    const { getByTestId, getByText } = render(
      <NavItem text='This is a nav item' url='/' />
    );

    expect(getByTestId('nav item')).toBeInTheDocument();
    expect(getByText('This is a nav item')).toBeInTheDocument();
    expect(getByTestId('nav item')).toHaveClass('border-primary');
  });

  it('should render the icon component', () => {
    const Icon = () => <span data-testid='sample icon' />;
    const { getByTestId } = render(
      <NavItem text='This is a nav item' url='/' icon={Icon} />
    );

    expect(getByTestId('sample icon')).toBeInTheDocument();
  });
});
