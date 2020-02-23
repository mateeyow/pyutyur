import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from '../Sidebar';

describe('#Sidebar', () => {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');

  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
    }));
  });

  afterEach(() => {
    useRouter.mockReset();
  });

  afterAll(() => {
    useRouter.mockRestore();
  });

  it('should render the sidebar component', () => {
    const { getByTestId } = render(<Sidebar />);

    expect(getByTestId('sidebar')).toBeInTheDocument();
    expect(getByTestId('sidebar')).toHaveTextContent('Pyutyur');
  });
});
