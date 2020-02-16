import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from '../Sidebar';

describe('#Sidebar', () => {
  it('should render the sidebar component', () => {
    const { getByTestId } = render(<Sidebar />);

    expect(getByTestId('sidebar')).toBeInTheDocument();
    expect(getByTestId('sidebar')).toHaveTextContent('Pyutyur');
  });
});
